import React from 'react'
import { StyleSheet, View, Button, TouchableOpacity, Image, Text, ScrollView, Alert } from 'react-native'
import { coffees } from '../../app.json'
import { colors, iconSizes, fontSizes } from '../styles'
import ReactNativeSensors, { Accelerometer } from 'react-native-sensors' //{ Accelerometer, Gyroscope }

export default class LexikonScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { alert: false }
        this.accelerationObservable = new Accelerometer({ updateInterval: 100 })
    }

    randomCoffee() {
        const numberOfCoffees = coffees.length
        return '' + Math.floor(Math.random() * numberOfCoffees)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.screenProps.route_index === 1) {
            this.accelerationObservable
                .map(({ x, y, z }) => y) //x + y + z)
                .filter(speed => speed > 10)
                .subscribe(speed => {
                    this.showAlert()
                })
        } else {
            this.accelerationObservable.stop()
        }
    }

    showAlert() {
        const { navigate } = this.props.navigation

        if (!this.state.alert) {
            const randCoffee = this.randomCoffee()

            this.setState({ alert: true })

            Alert.alert(
                'Kennst du schon... ',
                coffees[randCoffee].name,
                [
                    {
                        text: 'Zurück',
                        style: 'cancel',
                        onPress: () => this.setState({ alert: false })
                    },
                    {
                        text: 'Ausprobieren',
                        onPress: () => {
                            this.setState({ alert: false })
                            navigate('DetailLexikon', {
                                coffee: coffees[randCoffee]
                            })
                        }
                    }
                ],
                {
                    cancelable: true,
                    onDismiss: () => this.setState({ alert: false })
                }
            )
        }
    }

    render() {
        const { navigate } = this.props.navigation

        const coffeeImages = {
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
                        <TouchableOpacity
                            key={coffee.id}
                            onPress={() =>
                                navigate('DetailLexikon', {
                                    coffee: coffee
                                })
                            }
                        >
                            <View style={index % 2 == 0 ? styles.outerReverse : styles.outer}>
                                <Image style={styles.image} source={coffeeImages[coffee.id]} />
                                <Text style={styles.text}>{coffee.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.secondary
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
