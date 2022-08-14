import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    position?: 'br' | 'bl';
}

export const Fab = ({title, onPress, position='br'}: Props) => {

    const android = () =>{
        return (<View style={[
            styles.fabLocation,
            (position === 'bl')?styles.left:styles.rigth
            ]}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('red', false, 30)}
                onPress={onPress}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
        )
    }

    const ios = () =>{
        return(
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.fabLocation,
                    (position === 'bl')?styles.left:styles.rigth]}
                onPress={onPress}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    return Platform.OS ==='ios'?ios():android()
};

const styles = StyleSheet.create({
    fabLocation:{
        position: 'absolute',
        bottom: 20,

    },

    rigth: {
        right: 29
    },
    left: {
        left: 29
    },
    fab: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'

    }
});