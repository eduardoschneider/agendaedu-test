import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo } from 'react-native';
import ObservationCard from '@/components/ObservacoesCard';
import { useRequest } from '@/hooks/useRequest';
import { Observation } from '@/types/types';
import { Container } from './styles';
import { StackScreenNavigationProp } from '@/navigation';

export default function ObservacoesScreen({navigation}: {navigation: StackScreenNavigationProp<'Dashboard'>}) {
  const {
    fetchAll,
    items: observations,
    loading,
    remove,
    loadMore,
    loadingMore,
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

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Observation>) => (
      <ObservationCard obs={item} onPress={() => goToStudent(item.studentId)} 
      onDelete={() => remove(item.id)}/>
    ),
    [observations],
  );

  return (
    <Container  source={require('@/assets/dashboard-background.jpg')} resizeMode="cover">
      {loading && <ActivityIndicator size="large" color="purple" />}

      <FlatList
        data={observations}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
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
