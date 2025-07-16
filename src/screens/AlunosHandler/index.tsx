import React, { useState, useEffect, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import {
  Container,
  Input,
  Label,
  ButtonText,
  SaveButton,
  AddButton,
  AddButtonText,
  CustomPicker,
} from './styles';
import { Student, Observation } from '@/types/types';
import { useRequest } from '@/hooks/useRequest';
import { StackScreenNavigationRouteProps } from '@/navigation';
import ObservationCard from '@/components/ObservacoesCard';
import { useFocusEffect } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function AlunosHandler({
  navigation,
  route,
}: StackScreenNavigationRouteProps<'AlunosHandler'>) {
  
  const { id } = route.params || {};

  const { fetchById, update, add } = useRequest<Student>('students');
  const { fetchByKey, remove } = useRequest<Observation>('observations');

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

    if (id) {
      await update(id, form);
    } else {
      await add(form);
    }

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

  const addObservation = () => {
    navigation.navigate('ObservacoesHandler', { studentId: id });
  };

  const editObservation = (id: number) => {
    navigation.navigate('ObservacoesHandler', { id, studentId: id });
  };

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
    <Container>
      <Label>Nome</Label>
      <Input
        value={form.name}
        onChangeText={text => handleChange('name', text)}
        placeholder="Digite o nome do aluno"
      />

      <Label>Idade</Label>
      <Input
        value={form.age ? String(form.age) : ''}
        onChangeText={text => handleChange('age', text)}
        keyboardType="numeric"
        placeholder="Digite a idade"
        maxLength={2}
      />

      <Label>Turma</Label>
      <CustomPicker selectedValue={form.class}
        onValueChange={(itemValue, itemIndex) =>
          handleChange('class', itemValue as string)
        }>
        <Picker.Item label="1A" value="1A" />
        <Picker.Item label="2A" value="2A" />
        <Picker.Item label="1B" value="1B" />
        <Picker.Item label="2B" value="2B" />
        <Picker.Item label="1C" value="1C" />
        <Picker.Item label="2C" value="2C" />
      </CustomPicker>

      {id && (
        <AddButton onPress={() => addObservation()}>
          <AddButtonText> + Adicionar observação </AddButtonText>
        </AddButton>
      )}

      {id &&
      <FlatList
        data={observationList.reverse()}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ObservationCard
            obs={item}
            onPress={() => editObservation(item.id)}
            onDelete={() => handleDeleteObservation(item.id)}
          />
        )}
      />
      }

      <SaveButton onPress={handleSubmit}>
        <ButtonText>Salvar</ButtonText>
      </SaveButton>
    </Container>
  );
}
