import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Header from './components/header';
import Formulario from './components/formulario';
import Cotizacion from './components/cotizacion';


export default function App() {

  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');
  const [ consultarAPI, guardarConsultarAPI ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});
  const [ cargando, guardarCargando ] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if( consultarAPI ) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        guardarCargando(true);
        
       // ocultar
       setTimeout(() => {
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])
        // console.log('resultado:', guardarResultado);
        guardarConsultarAPI(false);
        guardarCargando(false);
       }, 1000)


      }
    }
    cotizarCriptomoneda();
  }, [consultarAPI] )

  const componente = cargando ? <ActivityIndicator size="large" color="#5E49E2" /> : <Cotizacion resultado = { resultado } />;

  return(
    <>
    <ScrollView>
       <Header/>
       <Image style={styles.imagen}
       source={  require('./assets/img/cryptomonedas.png')  }
       />
       <View style={styles.contenido}>
        <Formulario
          moneda={moneda}
          criptomoneda={criptomoneda}
          guardarMoneda = { guardarMoneda }
          guardarCriptomoneda = { guardarCriptomoneda }
          guardarConsultarAPI = { guardarConsultarAPI }
        />
        
       </View>

        <View style={{ marginTop: 40 }} >
          { componente }
       </View>
       
       </ScrollView>
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

