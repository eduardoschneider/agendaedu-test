import React, { useState, useEffect, useCallback } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItemInfo,
  TextInput,
} from 'react-native';
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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleFavoriteRequest } from '@/store/professor/professorSlice';
import { useFocusEffect } from '@react-navigation/native';

export default function StudentsScreen({
  navigation,
}: {
  navigation: StackScreenNavigationProp<'Dashboard'>;
}) {
  const {
    fetchAll,
    items: students,
    remove,
    loadMore,
    loadingMore,
  } = useRequest<Student>('students');

  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState<Student[]>(students);

  const dispatch = useDispatch();
  const professor = useSelector((state: RootState) => state.professor.data);

  useFocusEffect(
    useCallback(() => {
      fetchAll();
    }, [])
  );

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
    if (professor?.favorites?.includes(id)) {
        Alert.alert('Atenção', 'Não é possível deletar alunos favoritos.');
        return;
    }
    remove(id);
  };

  const filterAlunos = () => {
    if (searchTerm.trim() === '') {
      setFilteredList(students);
    } else {
      const filtered = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredList(filtered);
    }
  };

  const handleToggleFavorite = useCallback((id: number) => {
    if (!professor) return;
    dispatch(
      toggleFavoriteRequest({ professorId: professor.id, studentId: id }),
    );
  }, []);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Student>) => (
      <AlunoCard
        aluno={item}
        isFavorite={professor?.favorites?.includes(item.id)}
        toggleFavorite={() => handleToggleFavorite(item.id)}
        onPress={() => handleAluno(item.id)}
        onDelete={() => handleDelete(item.id)}
      />
    ),
    [professor?.favorites, handleToggleFavorite],
  );

  useEffect(() => {
    filterAlunos();
  }, [searchTerm]);


  return (
    <Container
      source={require('@/assets/dashboard-background.jpg')}
      resizeMode="cover"
    >

      <Title> Lista de Alunos</Title>
      <Subtitle> Alunos registrados na escola </Subtitle>
      <TextInput
        placeholder="Pesquisar aluno por nome..."
        keyboardType="default"
        autoCapitalize="none"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={{
          backgroundColor: '#fff',
          borderRadius: 8,
          padding: 10,
          marginBottom: 16,
        }}
      />

      <FlatList
        data={searchTerm.length > 0 ? filteredList : students}
        extraData={searchTerm.length > 0 ? filteredList : students}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
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
