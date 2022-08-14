import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cuadro1}></View>
        <View style={styles.cuadro2}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height:400,
        width: 400,
        backgroundColor: 'red'
    },
    cuadro1:{
        width:100,
        height: 100,
        backgroundColor: 'blue',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    cuadro2:{
        width: 100,
        height: 100,
        backgroundColor:'cyan',
        position:'absolute',
        top: 0,
        right: 0
    }
})