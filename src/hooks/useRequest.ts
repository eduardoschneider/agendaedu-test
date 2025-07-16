import { useState } from 'react';
import api from '@/services/api';
import * as Sentry from '@sentry/react-native';

type CollectionName = 'professors' | 'students' | 'observations' | 'favorites';

type WithId = { id: number };

interface PaginatedResponse<T = any> {
  first: number;
  prev: number;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: T[];
}

export function useRequest<T extends WithId>(collection: CollectionName) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  async function fetchAll() {
    setLoading(true);
    try {
      const res = await api.get<PaginatedResponse<T>>(`/${collection}`, {
        params: { _page: 1 },
      });
      setItems(res.data.data);
      setCurrentPage(1);
      setLastPage(res.data.last);
    } catch {
      console.error(`Erro ao carregar ${collection}`);
      Sentry.captureException(new Error('Error fetching all items'));
    } finally {
      setLoading(false);
    }
  }

  async function fetchById(id: number) {
    setLoading(true);
    try {
      const res = await api.get<T>(`/${collection}/${id}`);
      return res.data;
    } catch {
      console.error(`Erro ao carregar ${collection} pelo id`);
      Sentry.captureException(new Error(`Error fetching ${collection} by id`));
      return null;
    } finally {
      setLoading(false);
    }
  }

  async function fetchByKey(id: any, key?: string) {
  setLoading(true);
  try {
    const url = key 
      ? `/${collection}?${key}=${id}` 
      : `/${collection}/${id}`;

    const res = await api.get<T | T[]>(url);
    return res.data;

  } catch {
    console.error(`Erro ao carregar ${collection}`);
    Sentry.captureException(new Error(`Error fetching ${collection}`));
    return null;
  } finally {
    setLoading(false);
  }
}

  async function add(item: Omit<T, 'id'>) {
    setLoading(true);
    try {
      const res = await api.post<T>(`/${collection}`, item);
      setItems(prev => [...prev, res.data]);
    } catch {
      console.error(`Erro ao adicionar em ${collection}`);
      Sentry.captureException(new Error('Error adding item'));
    } finally {
      setLoading(false);
    }
  }

  async function update(id: number, item: Partial<T>) {
    setLoading(true);
    try {
      const res = await api.patch<T>(`/${collection}/${id}`, item);
      setItems(prev => prev.map(i => (i.id === id ? res.data : i)));
    } catch {
      console.error(`Erro ao atualizar ${collection}`);
      Sentry.captureException(new Error('Error updating item'));
    } finally {
      setLoading(false);
    }
  }

  async function remove(id: number) {
    setLoading(true);
    try {
      await api.delete(`/${collection}/${id}`);
      setItems(prev => prev.filter(i => !(i.id === id)));
    } catch {
      console.error(`Erro ao deletar de ${collection}`);
      Sentry.captureException(new Error('Error removing item'));
    } finally {
      setLoading(false);
    }
  }

  const loadMore = async () => {
    if (currentPage == lastPage) return;
    if (loadingMore) return;
    setLoadingMore(true);
    try {
      const nextPage = currentPage + 1;
      const res = await api.get<PaginatedResponse<T>>(`/${collection}`, {
        params: { _page: nextPage },
      });
      if (currentPage < res.data.pages) {
        setItems(prev => {
          const existingIds = new Set(prev.map(item => item.id));
          const newItems = res.data.data.filter(item => !existingIds.has(item.id));
          return [...prev, ...newItems];
        });
        setCurrentPage(nextPage);
      }
    } finally {
      setLoadingMore(false);
    }
  };

  return {
    items,
    loading,
    fetchAll,
    fetchById,
    fetchByKey,
    loadMore,
    loadingMore,
    add,
    update,
    remove,
  };
}
