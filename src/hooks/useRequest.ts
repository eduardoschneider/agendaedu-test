import { useState, useEffect } from 'react';
import api from '@/services/api';

type CollectionName = 'professors' | 'students' | 'observations' | 'favorites';

type WithId = { id: number };

export function useRequest<T extends WithId>(collection: CollectionName) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchAll() {
    setLoading(true);
    try {
      const res = await api.get<T[]>(`/${collection}`);
      setItems(res.data);
      setError(null);
    } catch {
      setError(`Erro ao carregar ${collection}`);
    } finally {
      setLoading(false);
    }
  }

  async function add(item: Omit<T, 'id'>) {
    setLoading(true);
    try {
      const res = await api.post<T>(`/${collection}`, item);
      setItems(prev => [...prev, res.data]);
      setError(null);
    } catch {
      setError(`Erro ao adicionar em ${collection}`);
    } finally {
      setLoading(false);
    }
  }

  async function update(id: number, item: Partial<T>) {
    setLoading(true);
    try {
      const res = await api.patch<T>(`/${collection}/${id}`, item);
      setItems(prev => prev.map(i => (i.id === id ? res.data : i)));
      setError(null);
    } catch {
      setError(`Erro ao atualizar ${collection}`);
    } finally {
      setLoading(false);
    }
  }

  async function remove(id: number) {
    setLoading(true);
    try {
      await api.delete(`/${collection}/${id}`);
      setItems(prev => prev.filter(i => !(i.id === id)));
      setError(null);
    } catch {
      setError(`Erro ao deletar de ${collection}`);
    } finally {
      setLoading(false);
    }
  }

  async function fetchByCredentials(
    email: string,
    password: string,
  ): Promise<T | null> {
    setLoading(true);
    try {
      const res = await api.get<T[]>(`/${collection}`, {
        params: { email: email, password: password },
      });
      setError(null);
      console.log(res.data);
      return res.data.length > 0 ? res.data[0] : null;
    } catch {
      setError(`Erro ao buscar ${collection} com as credenciais`);
      return null;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAll();
  }, [collection]);

  return {
    items,
    loading,
    error,
    fetchAll,
    fetchByCredentials,
    add,
    update,
    remove,
  };
}
