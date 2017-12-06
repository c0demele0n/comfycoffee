import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import LexikonScreen from './components/LexikonScreen'
import DetailLexikonScreen from './components/DetailLexikonScreen'
import MapScreen from './components/MapScreen'
import ListScreen from './components/ListScreen'
import LocationInfosScreen from './components/LocationInfosScreen'
import LocationFeedbackScreen from './components/LocationFeedbackScreen'
import { colors, iconSizes } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

const tabBarOptions = {
    activeTintColor: colors.white,
    inactiveTintColor: colors.white,
    inactiveBackgroundColor: colors.lightbrownopaque,
    style: { backgroundColor: colors.lightbrown }
}

const LocationNavigator = TabNavigator(
    {
        Karte: {
            screen: MapScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    <Icon
                        size={iconSizes.m}
                        color={colors.white}
                        name="place"
                    />
                )
            }
        },
        Liste: {
            screen: ListScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    <Icon size={iconSizes.m} color={colors.white} name="list" />
                )
            }
        }
    },
    {
        swipeEnabled: false,
        tabBarOptions: tabBarOptions
    }
)

const DetailLocationNavigator = TabNavigator(
    {
        Infos: {
            screen: LocationInfosScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    <Icon
                        size={iconSizes.m}
                        color={colors.white}
                        name="free-breakfast"
                    />
                )
            }
        },
        Bewertungen: {
            screen: LocationFeedbackScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    <Icon size={iconSizes.m} color={colors.white} name="star" />
                )
            }
        }
    },
    {
        tabBarOptions: tabBarOptions
    }
)

export default (App = StackNavigator(
    {
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
    },
    {
        navigationOptions: {
            headerTintColor: colors.white,
            headerStyle: {
                backgroundColor: colors.primary
            }
        }
    }
))
