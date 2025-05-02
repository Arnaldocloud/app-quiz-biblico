import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { supabase } from './supabase';


const [preguntas, setPreguntas] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const cargarPreguntas = async () => {
    const { data, error } = await supabase.from('questions').select('*');
    if (error) {
      console.error('Error al cargar preguntas:', error);
    } else {
      // Mezclar las preguntas
      const mezcladas = data.sort(() => Math.random() - 0.5);
      setPreguntas(mezcladas);
    }
    setLoading(false);
  };

  cargarPreguntas();
}, []);



  const verificarRespuesta = (respuesta) => {
    if (preguntaActual < preguntas.length) {
      const pregunta = preguntas[preguntaActual];
      if (respuesta === pregunta.respuestaCorrecta) {
        setCorrectas(correctas + 1);
      } else {
        setIncorrectas(incorrectas + 1);
      }
      siguientePregunta();
    }
  };

  const siguientePregunta = () => {
    setPreguntaActual(preguntaActual + 1);
  };

  const reiniciarJuego = () => {
    setPreguntaActual(0);
    setCorrectas(0);
    setIncorrectas(0);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#555" />
        <Text>Cargando preguntas...</Text>
      </View>
    );
  }
  
  return (
    <View>
      {mostrarPregunta()}
      <View>
        <Text>CORRECTAS: {correctas}</Text>
        <Text>INCORRECTAS: {incorrectas}</Text>
      </View>
      <TouchableOpacity 
        style={styles.botonReiniciar} 
        onPress={reiniciarJuego} 
      >
        <Text>Reiniciar Juego</Text>
      </TouchableOpacity>
    </View>
  );


  return (
    <View style={styles.container}>
      {mostrarPregunta()}
      <View style={styles.resultadosContainer}>
        <Text style={styles.resultado}>CORRECTAS: {correctas}</Text>
        <Text style={styles.resultado}>INCORRECTAS: {incorrectas}</Text>
      </View>
      <TouchableOpacity style={styles.botonReiniciar} onPress={reiniciarJuego}>
        <Text style={styles.textoBoton}>Reiniciar Juego</Text>
      </TouchableOpacity>
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    padding: 16,
  },
  preguntaContainer: {
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  pregunta: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  botonRespuesta: {
    backgroundColor: '#B3E5FC',
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  textoBoton: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  resultadosContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  resultado: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  botonReiniciar: {
    backgroundColor: '#FFAB91',
    padding: 10,
    borderRadius: 20,
  },
  juegoTerminado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
  },
});

export default Juego;
