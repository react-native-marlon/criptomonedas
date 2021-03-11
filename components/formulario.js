import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = () => { 
    
    const [ moneda, guardarMoneda ] = useState('');
    const [ criptomoneda, guardarCriptomoneda ] = useState('');
    const [ criptomonedas, guardarCriptomonedas ] = useState('');

    console.log()
    
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            // console.log(resultado.data.Data);
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    },  []);

    const obtenerMoneda = moneda => {
        guardarMoneda(moneda)
    }

    const obtenerCriptomoneda = cripto => {
        guardarCriptomoneda( cripto )
    } 
    
    return(
        <View>
            <Text style={styles.label}>MONEDA</Text>
            <Picker
                selectedValue = {moneda}
                onValueChange={  moneda => obtenerMoneda(moneda)  }
                itemStyle={{  height:120 }}
                >
               <Picker.Item label="- Seleccione -" value=''/>
               <Picker.Item label="Dolar de Estados Unidos" value='USD'/>
               <Picker.Item label="Peso Mexicano" value='MXN'/>
               <Picker.Item label="Euro" value='EUR'/>
               <Picker.Item label="Libra Esterlina" value='GBP'/>
            </Picker>


            <Text style={styles.label}>CRYPTOMONEDA</Text>

            <Picker
                selectedValue = {criptomoneda}
                onValueChange={  crypto => obtenerCriptomoneda(crypto)  }
                itemStyle={{  height:120 }}
                >
               <Picker.Item label="- Seleccione -" value=''/>
                { ( criptomonedas || [] ).map( cripto=> ( <Picker.Item  key={ cripto.CoinInfo.Id } label={ cripto.CoinInfo.FullName } value={ cripto.CoinInfo.Name }/>) ) }
            </Picker>
        </View>
    )
};

const styles = StyleSheet.create({
    label: {
        fontSize: 22,
        marginVertical: 20,
    }
})


export default Formulario;