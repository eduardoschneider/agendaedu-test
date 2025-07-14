import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/fontawesome6';
import Home from '@/screens/Home';
import Alunos from '@/screens/Alunos';
import Observacoes from '@/screens/Observacoes';

const Tab = createBottomTabNavigator();

export default function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#dec4fcff', elevation: 0, borderTopWidth: 0, borderTopColor: '#e9d4ff', paddingBottom: 0 },
        tabBarActiveTintColor: '#8332b9',
        tabBarActiveBackgroundColor: '#e9d4ff',
        tabBarInactiveTintColor: '#8332b99d',
        tabBarIcon: ({ color, size }) => {
          let iconName:any = '';
          
          if (route.name === 'Home') {
            iconName = 'newspaper';
          } else if (route.name === 'Alunos') {
            iconName = 'id-card';
          } else if (route.name === 'Observacoes') {
            iconName = 'object-group';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Alunos" component={Alunos} />
      <Tab.Screen name="Observacoes" component={Observacoes} />
    </Tab.Navigator>
  );
}