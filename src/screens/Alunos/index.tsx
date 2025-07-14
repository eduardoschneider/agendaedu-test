import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { StackScreenNavigationProp } from '@/navigation';
import AlunoCard from '../../components/AlunoCard';
import { useRequest } from '@/hooks/useRequest';
import { Student } from '@/types/types';
import { AddButton, AddButtonText, Container, Message } from './styles';

export default function StudentsScreen({navigation}: {navigation: StackScreenNavigationProp<'Dashboard'>}) {
  const {
    fetchAll,
    items: students,
    loading,
    loadMore,
    loadingMore,
    error,
  } = useRequest<Student>('students');
  
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchAll();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchAll(); // sua função do hook
    setRefreshing(false);
  };

  return (
    <Container>
      {loading && <ActivityIndicator size="large" color="purple" />}
      {error && <Message>{error}</Message>}

      <FlatList
        data={students}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <AlunoCard aluno={item} onPress={() => navigation.navigate('AlunosHandler', {id: item.id})}/>}
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
