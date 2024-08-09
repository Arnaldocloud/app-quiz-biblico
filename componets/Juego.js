import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const preguntas = [
  {
    pregunta: "¿Quién lideró la construcción del arca según el Antiguo Testamento?",
    respuestas: ["Moisés", "Noé", "Abraham", "David"],
    respuestaCorrecta: "Noé"
  },
  {
    pregunta: "¿Cuántos años vivió Abraham según la Biblia?",
    respuestas: ["175", "100", "150", "200"],
    respuestaCorrecta: "175"
  },
  // ... (otras preguntas)
];

const Juego = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [correctas, setCorrectas] = useState(0);
  const [incorrectas, setIncorrectas] = useState(0);

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

  const mostrarPregunta = () => {
    if (preguntaActual < preguntas.length) {
      const pregunta = preguntas[preguntaActual];
      return (
        <View style={styles.preguntaContainer}>
          <Text style={styles.pregunta}>{pregunta.pregunta}</Text>
          {pregunta.respuestas.map((respuesta, index) => (
            <TouchableOpacity
              key={index}
              style={styles.botonRespuesta}
              onPress={() => verificarRespuesta(respuesta)}
            >
              <Text style={styles.textoBoton}>{respuesta}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    } else {
      return <Text style={styles.juegoTerminado}>¡Juego terminado!</Text>;
    }
  };

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
};

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
