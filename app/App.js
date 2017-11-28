import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import MapScreen from './components/MapScreen'
import ListScreen from './components/ListScreen'
import DetailLocationScreen from './components/DetailLocationScreen'
import LexikonScreen from './components/LexikonScreen'
import DetailLexikonScreen from './components/DetailLexikonScreen'

export default (App = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: { title: 'ComfyCoffee' }
    },
    Map: {
        screen: MapScreen,
        navigationOptions: { title: 'Karte' }
    },
    List: {
        screen: ListScreen,
        navigationOptions: { title: 'Liste' }
    },
    DetailLocation: {
        screen: DetailLocationScreen,
        navigationOptions: { title: 'Café' }
    },
    Lexikon: {
        screen: LexikonScreen,
        navigationOptions: { title: 'Lexikon' }
    },
    DetailLexikon: {
        screen: DetailLexikonScreen,
        navigationOptions: { title: 'Kaffee' }
    }
}))
