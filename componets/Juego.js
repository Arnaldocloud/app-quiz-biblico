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
  {
    pregunta: "¿Quién fue el profeta que realizó milagros, incluyendo la multiplicación de harina y aceite?",
    respuestas: ["Isaías", "Elías", "Jeremías", "Daniel"],
    respuestaCorrecta: "Elías"
},
{
    pregunta: "¿Quién escribió la mayoría de los Salmos en el Libro de los Salmos?",
    respuestas: ["David", "Salomón", "Asaf", "Moisés"],
    respuestaCorrecta: "David"
},
{
    pregunta: "¿Cuál fue el símbolo del pacto de Dios con Noé después del diluvio?",
    respuestas: ["Arcoiris", "Estrella", "Cruz", "Estrella de David"],
    respuestaCorrecta: "Arco iris"
},
{
    pregunta: "¿Quién fue la madre de Samuel, el profeta?",
    respuestas: ["Raquel", "Débora", "Ana", "Abigail"],
    respuestaCorrecta: "Ana"
},
{
    pregunta: "¿Cuántos días y noches duró el diluvio durante los tiempos de Noé?",
    respuestas: ["40", "7", "100", "365"],
    respuestaCorrecta: "40"
},
{
    pregunta: "¿Quién fue el primer rey de Israel?",
    respuestas: ["Saúl", "David", "Salomón", "Saúl y David"],
    respuestaCorrecta: "Saúl"
},
{
    pregunta: "¿Cuántos hermanos tenía José en el Antiguo Testamento?",
    respuestas: ["10", "11", "12", "13"],
    respuestaCorrecta: "11"
},
{
    pregunta: "¿Qué instrumento musical usaba David para calmar a Saúl?",
    respuestas: ["Arpa", "Flauta", "Lira", "Trompeta"],
    respuestaCorrecta: "Arpa"
},
{
    pregunta: "¿Cuántos días estuvo Jesús en el desierto siendo tentado por Satanás?",
    respuestas: ["20", "30", "40", "50"],
    respuestaCorrecta: "40"
},
{
    pregunta: "¿Quién fue el profeta que clamó en el desierto 'Preparad el camino del Señor'?",
    respuestas: ["Isaías", "Jeremías", "Juan el Bautista", "Malaquías"],
    respuestaCorrecta: "Juan el Bautista"
},
{
    pregunta: "¿Cuál fue el primer milagro registrado de Jesús?",
    respuestas: ["Multiplicación de panes y peces", "Convertir agua en vino", "Sanar a un ciego", "Resucitar a Lázaro"],
    respuestaCorrecta: "Convertir agua en vino"
},
{
    pregunta: "¿Qué ciudad fue conocida como 'la ciudad de David' en el Antiguo Testamento?",
    respuestas: ["Belén", "Jerusalén", "Hebrón", "Nazaret"],
    respuestaCorrecta: "Jerusalén"
},
{
    pregunta: "¿Cuál de los apóstoles era conocido como 'el discípulo amado'?",
    respuestas: ["Pedro", "Andrés", "Juan", "Tomás"],
    respuestaCorrecta: "Juan"
},
{
    pregunta: "¿Cuál es el último libro del Nuevo Testamento?",
    respuestas: ["Apocalipsis", "Hechos", "Romanos", "1 Juan"],
    respuestaCorrecta: "Apocalipsis"
},
{
    pregunta: "¿Cuál fue el tema central del mensaje de Juan el Bautista?",
    respuestas: ["Amor", "Arrepentimiento", "Prosperidad", "Justicia social"],
    respuestaCorrecta: "Arrepentimiento"
},
{
    pregunta: "¿Quién fue el sumo sacerdote que interrogó a Jesús antes de su crucifixión?",
    respuestas: ["Caifás", "Anás", "Gamaliel", "Herodes"],
    respuestaCorrecta: "Anás"
},
{
    pregunta: "¿Cuántos días después de la resurrección ascendió Jesús al cielo?",
    respuestas: ["20", "30", "40", "50"],
    respuestaCorrecta: "40"
},
{
    pregunta: "¿En qué ciudad nació Jesús según el Nuevo Testamento?",
    respuestas: ["Belén", "Jerusalén", "Nazaret", "Hebrón"],
    respuestaCorrecta: "Belén"
},
{
    pregunta: "¿Quién fue el apóstol que negó a Jesús tres veces antes del amanecer?",
    respuestas: ["Pedro", "Juan", "Santiago", "Andrés"],
    respuestaCorrecta: "Pedro"
},
{
    pregunta: "¿Cuál es la enseñanza principal de Juan 3:16?",
    respuestas: ["El amor de Dios y la salvación por fe en Jesús", "La importancia de la obediencia a la ley", "La necesidad de buenas obras para la salvación", "La recompensa de la riqueza material"],
    respuestaCorrecta: "El amor de Dios y la salvación por fe en Jesús"
},
{
  pregunta: "¿Cuál es el primer libro de la Biblia?",
  respuestas: ["Génesis", "Éxodo", "Levítico", "Números"],
  respuestaCorrecta: "Génesis"
},
{
  pregunta: "¿Quién liberó a los israelitas de la esclavitud en Egipto?",
  respuestas: ["Moisés", "Josué", "David", "Salomón"],
  respuestaCorrecta: "Moisés"
},
{
  pregunta: "¿Cuántos discípulos tuvo Jesús?",
  respuestas: ["10", "12", "14", "16"],
  respuestaCorrecta: "12"
},
{
  pregunta: "¿Quién es el autor del libro de Apocalipsis?",
  respuestas: ["Pedro", "Juan", "Mateo", "Lucas"],
  respuestaCorrecta: "Juan"
},
{
  pregunta: "¿Cuántos libros tiene el Antiguo Testamento?",
  respuestas: ["27", "39", "66", "73"],
  respuestaCorrecta: "39"
},
{
  pregunta: "¿Qué rey de Judá restauró el Templo de Jerusalén que había caído en mal estado?",
  respuestas: ["Ezequías", "Manasés", "Amón", "Josías"],
  respuestaCorrecta: "Josías"
},
{
  pregunta: "¿Cuál es el último libro del Antiguo Testamento?",
  respuestas: ["Malaquías", "Habacuc", "Zacarías", "Sofonías"],
  respuestaCorrecta: "Malaquías"
},
{
  pregunta: "¿Quién interpretó el sueño del faraón en Egipto?",
  respuestas: ["Moisés", "Aarón", "José", "Jacob"],
  respuestaCorrecta: "José"
},
{
  pregunta: "¿Quién fue tragado por un gran pez según el Antiguo Testamento?",
  respuestas: ["Jonás", "Noé", "Job", "Daniel"],
  respuestaCorrecta: "Jonás"
},
{
  pregunta: "¿Cuántos años vivió Matusalén, el hombre más longevo de la Biblia?",
  respuestas: ["777", "969", "365", "120"],
  respuestaCorrecta: "969"
},
{
    pregunta: "¿Quién fue el primer rey de Israel?",
    respuestas: ["David", "Salomón", "Saúl", "Absalón"],
    respuestaCorrecta: "Saúl"
  },
  {
    pregunta: "¿Quién construyó el Arca del Pacto?",
    respuestas: ["Moisés", "Aarón", "Bezalel", "Hur"],
    respuestaCorrecta: "Bezalel"
  },
  {
    pregunta: "¿Cuántos mandamientos entregó Dios a Moisés en el Monte Sinaí?",
    respuestas: ["7", "10", "12", "15"],
    respuestaCorrecta: "10"
  },
  {
    pregunta: "¿Quién negó a Jesús tres veces antes del canto del gallo?",
    respuestas: ["Mateo", "Marcos", "Lucas", "Pedro"],
    respuestaCorrecta: "Pedro"
  },
  {
    pregunta: "¿Quién es conocido como el discípulo amado de Jesús?",
    respuestas: ["Pedro", "Juan", "Mateo", "Tomás"],
    respuestaCorrecta: "Juan"
  },
  {
    pregunta: "¿Quién escribió la mayoría de los libros del Nuevo Testamento?",
    respuestas: ["Pedro", "Juan", "Pablo", "Lucas"],
    respuestaCorrecta: "Pablo"
  },
  {
    pregunta: "¿Cuál es el libro más corto del Nuevo Testamento?",
    respuestas: ["3 Juan", "Judas", "Filemón", "2 Juan"],
    respuestaCorrecta: "2 Juan"
  },
  {
    pregunta: "¿Quién fue el primer mártir cristiano?",
    respuestas: ["Esteban", "Pedro", "Pablo", "Barnabás"],
    respuestaCorrecta: "Esteban"
  },
  {
    pregunta: "¿Quién fue el profeta que fue llevado al cielo en un carro de fuego?",
    respuestas: ["Elías", "Eliseo", "Isaías", "Jeremías"],
    respuestaCorrecta: "Elías"
  },
  {
    pregunta: "¿Quién fue el primer hombre creado por Dios según la Biblia?",
    respuestas: ["Caín", "Abel", "Adán", "Noé"],
    respuestaCorrecta: "Adán"
  },
  {
    pregunta: "¿Quién fue la esposa de Abraham?",
    respuestas: ["Sara", "Rebeca", "Raquel", "Lea"],
    respuestaCorrecta: "Sara"
  },
  {
    pregunta: "¿Quién fue el rey que derrotó al gigante Goliat?",
    respuestas: ["Saúl", "David", "Salomón", "Absalón"],
    respuestaCorrecta: "David"
  },
  {
    pregunta: "¿Quién fue el profeta que fue arrojado al foso de los leones?",
    respuestas: ["Daniel", "Jeremías", "Isaías", "Ezequiel"],
    respuestaCorrecta: "Daniel"
  },
  {
    pregunta: "¿Quién fue el discípulo que traicionó a Jesús?",
    respuestas: ["Pedro", "Juan", "Judas", "Mateo"],
    respuestaCorrecta: "Judas"
  },
  {
    pregunta: "¿Quién fue el discípulo que dudó de la resurrección de Jesús hasta que vio sus heridas?",
    respuestas: ["Tomás", "Mateo", "Marcos", "Lucas"],
    respuestaCorrecta: "Tomás"
  },
  {
    pregunta: "¿Quién fue el apóstol que tuvo una visión del cielo en la isla de Patmos?",
    respuestas: ["Juan", "Pedro", "Pablo", "Santiago"],
    respuestaCorrecta: "Juan"
  },
  {
    pregunta: "¿Quién fue el fariseo que se convirtió en un seguidor de Jesús después de encontrarse con él en el camino a Damasco?",
    respuestas: ["Pablo", "Barnabás", "Silas", "Timoteo"],
    respuestaCorrecta: "Pablo"
  },
  {
    pregunta: "¿Quién fue el profeta que predijo el nacimiento de Jesús?",
    respuestas: ["Isaías", "Jeremías", "Ezequiel", "Daniel"],
    respuestaCorrecta: "Isaías"
  },
];
  // ... (otras preguntas)


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
