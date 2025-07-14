import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import {
  Container,
  Input,
  Label,
  ButtonText,
  SaveButton,
  GuideContainer,
  GuideLabel,
  Title,
} from './styles';
import { Observation } from '@/types/types';
import { useRequest } from '@/hooks/useRequest';
import { StackScreenNavigationRouteProps } from '@/navigation';

export default function ObservacoesHandler({
  navigation,
  route,
}: StackScreenNavigationRouteProps<'ObservacoesHandler'>) {
  const { id, studentId, onSave } = route.params || {};

  const { fetchById, update, add } = useRequest<Observation>('observations');

  const [form, setForm] = useState<Omit<Observation, 'id'>>({
    professorId: 1,
    studentId: studentId || 0,
    text: '',
    date: new Date().toISOString(),
  });

  const guideTexts = [
    '🖋 Seja específico: descreva comportamentos observáveis.',
    '✅ Destaque pontos positivos antes de sugerir melhorias.',
    '🎯 Use frases curtas e objetivas.',
    '⏰ Inclua a data e o contexto da observação.',
    '🔄 Proponha próximos passos claros para o aluno.',
  ];

  const handleChange = (
    field: keyof Omit<Observation, 'id'>,
    value: string,
  ) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!form.text) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (id) {
      await update(id, form);
      onSave?.(form.text, id);
    } else {
      await add(form);
      onSave?.(form.text);
    }

    navigation?.goBack();
    Alert.alert('Sucesso', 'Observacao salva com sucesso!');
  };

  useEffect(() => {
    if (id) {
      fetchById(id).then(obs => {
        if (obs) {
          setForm({
            professorId: obs.professorId,
            studentId: obs.studentId,
            text: obs.text,
            date: obs.date,
          });
        }
      });
    }
  }, []);

  return (
    <Container>
      <Title>Como escrever uma observação</Title>
      <GuideContainer>
        {guideTexts.map((text, idx) => (
          <GuideLabel key={idx}>{text}</GuideLabel>
        ))}
      </GuideContainer>
      <Label>Observação</Label>
      <Input
        value={form.text}
        onChangeText={text => handleChange('text', text)}
        placeholder="Digite sua observação"
        multiline
        numberOfLines={4}
        style={{ height: '50%' }}
      />
      <SaveButton onPress={handleSubmit}>
        <ButtonText>Salvar</ButtonText>
      </SaveButton>
    </Container>
  );
}
