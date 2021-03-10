import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'

const Header = () => { 
    return(
        <Text style={styles.encabezado} >CRIPTOMONEDAS</Text>
    )
};

const styles = StyleSheet.create({
    encabezado: {
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        backgroundColor: '#5E49E2',
        paddingBottom: 10,
        textAlign: 'center',
        fontSize: 20,
        color: '#FFF',
        marginBottom: 30
    }
})


export default Header;


