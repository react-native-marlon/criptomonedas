import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/header'
import Formulario from './components/formulario'

export default function App() {
  return(
    <>
       <Header/>
       <Image style={styles.imagen}
       source={  require('./assets/img/cryptomonedas.png')  }
       />
       <View style={styles.contenido}>
        <Formulario/>
       </View>
    </>
  );
}

const styles = StyleSheet.create({
    imagen: {
      width: '100%',
      height:150,
      marginHorizontal: '2.5%'
    },

    contenido: {
      marginHorizontal: '2.5%'
    }
});

