
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const frases = [
  {
    texto: 'Cree en ti y todo será posible.',
    autor: 'Anónimo',
  },
  {
    texto: 'Cada día es una nueva oportunidad para comenzar.',
    autor: 'Anónimo',
  },
  {
    texto: 'Nunca dejes de aprender y crecer.',
    autor: 'Anónimo',
  },
  {
    texto: 'Los pequeños pasos también te llevan lejos.',
    autor: 'Anónimo',
  },
  {
    texto: 'El éxito comienza con la decisión de intentarlo.',
    autor: 'Anónimo',
  },
  {
    texto: 'Haz hoy algo que tu yo del futuro agradezca.',
    autor: 'Anónimo',
  },
  {
    texto: 'No tienes que ser perfecto, solo seguir adelante.',
    autor: 'Anónimo',
  },
];

export default function App() {
  const [indice, setIndice] = useState(0);

  const cambiarFrase = () => {
    let nuevoIndice;

    do {
      nuevoIndice = Math.floor(Math.random() * frases.length);
    } while (nuevoIndice === indice);

    setIndice(nuevoIndice);
  };

  return (
    <View style={styles.contenedor}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.titulo}>Frase del Día</Text>

      <Text style={styles.subtitulo}>
        Una pequeña inspiración para hoy
      </Text>

      <View style={styles.tarjeta}>
        <Text style={styles.comilla}>"</Text>

        <Text style={styles.frase}>
          {frases[indice].texto}
        </Text>

        <Text style={styles.autor}>
          — {frases[indice].autor}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.boton}
        onPress={cambiarFrase}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBoton}>
          ✨ Nueva frase
        </Text>
      </TouchableOpacity>

      <Text style={styles.pie}>
        Inspírate • Aprende • Crece
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F3EEFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6038A8',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 15,
    color: '#77708A',
    marginTop: 10,
    marginBottom: 35,
    textAlign: 'center',
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 22,
    padding: 28,
    alignItems: 'center',
    elevation: 5,
  },

  comilla: {
    fontSize: 65,
    color: '#A78BFA',
    height: 65,
  },

  frase: {
    fontSize: 23,
    fontWeight: '600',
    color: '#352653',
    textAlign: 'center',
    lineHeight: 34,
    marginVertical: 15,
  },

  autor: {
    fontSize: 15,
    color: '#817593',
    marginTop: 15,
  },

  boton: {
    backgroundColor: '#7952CC',
    paddingVertical: 16,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginTop: 30,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  pie: {
    fontSize: 13,
    color: '#817593',
    marginTop: 35,
  },
});
