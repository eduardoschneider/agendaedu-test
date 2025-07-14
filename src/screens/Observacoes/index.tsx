import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import ObservationCard from '@/components/ObservacoesCard';
import { useRequest } from '@/hooks/useRequest';
import { Observation } from '@/types/types';
import { AddButton, AddButtonText, Container, Message } from './styles';
import { StackScreenNavigationProp } from '@/navigation';

export default function ObservacoesScreen({navigation}: {navigation: StackScreenNavigationProp<'Dashboard'>}) {
  const {
    fetchAll,
    items: observations,
    loading,
    remove,
    loadMore,
    loadingMore,
    error,
  } = useRequest<Observation>('observations');
  
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchAll();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchAll();
    setRefreshing(false);
  };

  const goToStudent = (studentId: number) => {
    navigation.navigate('AlunosHandler', {id: studentId});
  }

  return (
    <Container>
      {loading && <ActivityIndicator size="large" color="purple" />}
      {error && <Message>{error}</Message>}

      <FlatList
        data={observations}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ObservationCard obs={item} onPress={() => goToStudent(item.studentId)} onDelete={() => remove(item.id)}/>}
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
    </Container>
  );
}
