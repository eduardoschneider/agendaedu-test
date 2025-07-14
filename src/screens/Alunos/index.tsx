import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, TextInput } from 'react-native';
import { StackScreenNavigationProp } from '@/navigation';
import AlunoCard from '../../components/AlunoCard';
import { useRequest } from '@/hooks/useRequest';
import { Student } from '@/types/types';
import {
  AddButton,
  AddButtonText,
  Container,
  Message,
  Subtitle,
  Title,
} from './styles';

export default function StudentsScreen({
  navigation,
}: {
  navigation: StackScreenNavigationProp<'Dashboard'>;
}) {
  const {
    fetchAll,
    items: students,
    loading,
    remove,
    loadMore,
    loadingMore,
    error,
  } = useRequest<Student>('students');

  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState<Student[]>(students);

  useEffect(() => {
    fetchAll();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchAll();
    setRefreshing(false);
  };

  const handleAluno = (item: number) => {
    navigation.navigate('AlunosHandler', { id: item });
  };

  const handleDelete = (id: number) => {
    setFilteredList(prev => prev.filter(i => !(i.id === id)));
    remove(id);
  }

  const filterAlunos = () => {
    if (searchTerm.trim() === '') {
      setFilteredList(students);
    } else {
      const filtered = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filtered);
      setFilteredList(filtered);
    }
  }

  useEffect(() => {
    filterAlunos();
  }, [searchTerm]);

  return (
    <Container>
      {loading && <ActivityIndicator size="large" color="purple" />}
      {error && <Message>{error}</Message>}

      <Title> Lista de Alunos</Title>
      <Subtitle> Alunos registrados na escola </Subtitle>
      <TextInput
        placeholder="Digite o nome do aluno..."
        keyboardType="default"
        autoCapitalize="none"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList
        data={searchTerm.length > 0 ? filteredList : students}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <AlunoCard
            aluno={item}
            onPress={() => handleAluno(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 16 }}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        refreshing={refreshing}
        onRefresh={onRefresh}
        removeClippedSubviews
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loadingMore ? <ActivityIndicator /> : null}
      />
      <AddButton onPress={() => navigation.navigate('AlunosHandler')}>
        <AddButtonText> + </AddButtonText>
      </AddButton>
    </Container>
  );
}
