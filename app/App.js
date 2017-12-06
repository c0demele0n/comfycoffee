import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import LexikonScreen from './components/LexikonScreen'
import DetailLexikonScreen from './components/DetailLexikonScreen'
import MapScreen from './components/MapScreen'
import ListScreen from './components/ListScreen'
import LocationInfosScreen from './components/LocationInfosScreen'
import LocationFeedbackScreen from './components/LocationFeedbackScreen'
import { colors } from './styles'

const tabBarOptions = {
    activeTintColor: colors.white,
    inactiveTintColor: colors.white,
    inactiveBackgroundColor: colors.secondary,
    style: { backgroundColor: colors.primary }
}

const LocationNavigator = TabNavigator(
    {
        Karte: { screen: MapScreen },
        Liste: { screen: ListScreen }
    },
    {
        swipeEnabled: false,
        tabBarOptions: tabBarOptions
    }
)

const DetailLocationNavigator = TabNavigator(
    {
        Infos: { screen: LocationInfosScreen },
        Bewertungen: { screen: LocationFeedbackScreen }
    },
    {
        tabBarOptions: tabBarOptions
    }
)

export default (App = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: { title: 'ComfyCoffee' }
    },
    Location: {
        screen: LocationNavigator,
        navigationOptions: { title: 'Cafés in der Nähe' }
    },
    DetailLocation: {
        screen: DetailLocationNavigator,
        navigationOptions: { title: 'Café' }
    },
    Lexikon: {
        screen: LexikonScreen,
        navigationOptions: { title: 'Lexikon' }
    },
    DetailLexikon: {
        screen: DetailLexikonScreen
    }
}))
