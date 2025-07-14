import React, { useState, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import {
  Container,
  Input,
  Label,
  Button,
  ButtonText,
  SaveButton,
} from './styles';
import { Student, Observation } from '@/types/types';
import { useRequest } from '@/hooks/useRequest';
import { StackScreenNavigationRouteProps } from '@/navigation';
import ObservationCard from '@/components/ObservacoesCard';

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
    class: '',
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

  const editObservation = (id: number) => {
    navigation.navigate('ObservacoesHandler', {
      id,
      studentId: id,
      onSave: (text, id) => updateObservationList(text, id),
    });
  };

  function updateObservationList(newText: string, id?: number) {
    setObservationList(prev =>
      prev.map(obs => (obs.id === id ? { ...obs, text: newText } : obs)),
    );
  }

  useEffect(() => {
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
  }, []);

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
      />

      <Label>Turma</Label>
      <Input
        value={form.class}
        onChangeText={text => handleChange('class', text)}
        placeholder="Digite a turma"
      />

      <FlatList
        data={observationList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ObservationCard
            obs={item}
            onPress={() => editObservation(item.id)}
            onDelete={() => handleDeleteObservation(item.id)}
          />
        )}
      />

      <SaveButton onPress={handleSubmit}>
        <ButtonText>Salvar</ButtonText>
      </SaveButton>
    </Container>
  );
}
