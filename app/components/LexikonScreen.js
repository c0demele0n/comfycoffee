import React from 'react'
import {
    StyleSheet,
    View,
    Button,
    TouchableHighlight,
    Image,
    Text,
    ScrollView
} from 'react-native'
import BottomNavigationContainer from './BottomNavigationContainer'
import { coffees } from '../../app.json'
import { colors, iconSizes, fontSizes } from '../styles'
import { Accelerometer, Gyroscope } from 'react-native-sensors'

export default class LexikonScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        coffeeImages = {
            espresso: require('../assets/espresso.png'),
            cappuccino: require('../assets/cappuccino.png'),
            latteMacchiato: require('../assets/latteMacchiato.png'),
            milchkaffee: require('../assets/milchkaffee.png'),
            mokka: require('../assets/mokka.png'),
            eiskaffee: require('../assets/eiskaffee.png'),
            pharisaer: require('../assets/pharisaer.png'),
            irishcoffee: require('../assets/irishcoffee.png')
        }
        return (
            <View style={styles.view}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {coffees.map((coffee, index) => (
                        <TouchableHighlight
                            id={coffee.id}
                            onPress={() =>
                                navigate('DetailLexikon', {
                                    coffee: coffee
                                })
                            }
                        >
                            <View
                                style={
                                    index % 2 == 0
                                        ? styles.outerReverse
                                        : styles.outer
                                }
                            >
                                <Image
                                    style={styles.image}
                                    source={coffeeImages[coffee.id]}
                                />

                                <Text style={styles.text}>{coffee.name}</Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                </ScrollView>
                <BottomNavigationContainer
                    navigation={this.props.navigation}
                    activeTab={2}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.secondary,
        paddingVertical: 20
    },
    scrollView: {
        paddingBottom: 56
    },
    outer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 120
    },
    outerReverse: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 120
    },
    image: {
        width: 80,
        height: 80
    },
    text: {
        color: colors.black,
        fontSize: 18,
        fontWeight: 'bold'
    }
})
