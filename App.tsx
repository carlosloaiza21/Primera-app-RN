import React from 'react'
import { SafeAreaView } from 'react-native';
/* import { FlexScreen } from './src/screens/FlexScreen'; */
import { TareaScreen } from './src/screens/TareaScreen';
/* import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen'; */


export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <TareaScreen />
    </SafeAreaView>

  )
}


