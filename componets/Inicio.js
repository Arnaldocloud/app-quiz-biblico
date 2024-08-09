import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Inicio = () => {
  const navigation = useNavigation();

  const navegarAJuego = () => {
    navigation.navigate('Juego');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Bienvenido al Quiz Biblíco!</Text>
      <TouchableOpacity style={styles.botonJugar} onPress={navegarAJuego}>
        <Text style={styles.textoBoton}>¡A jugar!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 40,
    textAlign: 'center',
  },
  botonJugar: {
    backgroundColor: '#FFAB91',
    padding: 15,
    borderRadius: 20,
  },
  textoBoton: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Inicio;
