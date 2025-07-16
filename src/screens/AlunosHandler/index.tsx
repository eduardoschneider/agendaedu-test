import React, { useState, useCallback } from 'react';
import { Alert, FlatList, ListRenderItemInfo } from 'react-native';
import *  as SC from './styles';
import { Student, Observation } from '@/types/types';
import { useRequest } from '@/hooks/useRequest';
import { StackScreenNavigationRouteProps } from '@/navigation';
import ObservationCard from '@/components/ObservacoesCard';
import { useFocusEffect } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function AlunosHandler({ navigation, route }: StackScreenNavigationRouteProps<'AlunosHandler'>) {
  
  const { fetchById, update, add } = useRequest<Student>('students');
  const { fetchByKey, remove } = useRequest<Observation>('observations');

  const { id } = route.params || {};

  const [form, setForm] = useState<Omit<Student, 'id'>>({
    name: '',
    age: 0,
    class: '1A',
  });
  const [observationList, setObservationList] = useState<Observation[]>([]);

  const handleChange = (field: keyof Omit<Student, 'id'>, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: field === 'age' ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.class || !form.age) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (id) 
      await update(id, form);
    else  
      await add(form);

    navigation?.goBack();
    Alert.alert('Sucesso', 'Aluno salvo com sucesso!');
  };

  const handleDeleteObservation = (id: number) => {
    try {
      remove(id);
      setObservationList(prev => prev.filter(obs => obs.id !== id));
      Alert.alert('Sucesso', 'Observação removida com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível remover a observação.');
    }
  };

  const handleObservation = (observationId?: number) => {
    navigation.navigate('ObservacoesHandler', {
      id: observationId,
      studentId: id
    });
  };

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Observation>) => (
      <ObservationCard
        obs={item}
        onPress={() => handleObservation(item.id)}
        onDelete={() => handleDeleteObservation(item.id)}
      />
    ),
    [observationList],
  );

  useFocusEffect(
    useCallback(() => {
      if (id) {
        fetchById(id).then(student => {
          if (student) {
            setForm({
              name: student.name,
              age: student.age,
              class: student.class,
            });
          }
        });

        fetchByKey(id, 'studentId').then(obs => {
          if (Array.isArray(obs) && obs) {
            setObservationList(obs);
          }
        });
      }
    }, []),
  );

  return (
    <SC.Container>
      <SC.Label>Nome</SC.Label>
      <SC.Input
        value={form.name}
        onChangeText={text => handleChange('name', text)}
        placeholder="Digite o nome do aluno"
      />

      <SC.Label>Idade</SC.Label>
      <SC.Input
        value={form.age ? String(form.age) : ''}
        onChangeText={text => handleChange('age', text)}
        keyboardType="numeric"
        placeholder="Digite a idade"
        maxLength={2}
      />

      <SC.Label>Turma</SC.Label>
      <SC.CustomPicker selectedValue={form.class}
        onValueChange={(itemValue) => handleChange('class', itemValue as string)}>
        <Picker.Item label="1A" value="1A" />
        <Picker.Item label="2A" value="2A" />
        <Picker.Item label="1B" value="1B" />
        <Picker.Item label="2B" value="2B" />
        <Picker.Item label="1C" value="1C" />
        <Picker.Item label="2C" value="2C" />
      </SC.CustomPicker>

      {id && (
        <SC.AddButton onPress={() => handleObservation()}>
          <SC.AddButtonText> + Adicionar observação </SC.AddButtonText>
        </SC.AddButton>
      )}
  
      <FlatList
        data={observationList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}/>

      <SC.SaveButton onPress={handleSubmit}>
        <SC.ButtonText>Salvar</SC.ButtonText>
      </SC.SaveButton>
    </SC.Container>
  );
}
