import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Juego from './componets/Juego'; // Asume que Juego está en la carpeta components
import Inicio from './componets/Inicio'; // Importa el nuevo componente Inicio

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{ 
            title: 'Inicio', 
            headerStyle: { backgroundColor: '#FFCCBC' }, 
            headerTintColor: '#FFFFFF' 
          }} 
        />
        <Stack.Screen 
          name="Juego" 
          component={Juego} 
          options={{ 
            title: 'Juego de Preguntas', 
            headerStyle: { backgroundColor: '#FFCCBC' }, 
            headerTintColor: '#FFFFFF' 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
