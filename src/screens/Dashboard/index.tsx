import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/screens/Home';
import Alunos from '@/screens/Alunos';
import Observacoes from '@/screens/Observacoes';
import { CustomIcon } from './styles';

const Tab = createBottomTabNavigator();

export default function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
          tabBarStyle: {
          backgroundColor: 'transparent',
          elevation: 0,   // Android
          shadowOpacity: 0, // iOS
          borderTopWidth: 0,
          position: 'absolute', // importante para deixar “flutuante” e não ocupar espaço
        },
        tabBarActiveTintColor: '#e7c67fff',
        tabBarActiveBackgroundColor: 'transparent',
        tabBarInactiveTintColor: '#c18ee2ff',
        tabBarIcon: ({ color, size }) => {
          let iconName:any = '';
          
          if (route.name === 'Home') {
            iconName = 'newspaper';
          } else if (route.name === 'Alunos') {
            iconName = 'id-card';
          } else if (route.name === 'Observacoes') {
            iconName = 'object-group';
          }

          return <CustomIcon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Alunos" component={Alunos} />
      <Tab.Screen name="Observacoes" component={Observacoes} />
    </Tab.Navigator>
  );
}