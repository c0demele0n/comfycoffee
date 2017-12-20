import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { colors } from '../styles'

class Indicator extends React.Component {
    render() {
        const { fill } = this.props
        return <View style={fill ? styles.filledCircle : styles.emptyCircle} />
    }
}

class IconWithIndicator extends React.Component {
    render() {
        const coffeeAttributes = {
            strength: require('../assets/coffee-grain.png'),
            milk: require('../assets/milk-bottle.png'),
            water: require('../assets/drop.png')
        }
        const { dots, icon } = this.props
        let indicators = []
        for (let i = 0; i < 3; i++) {
            indicators.push(dots >= i + 1)
        }

        return (
            <View style={styles.traits}>
                <Image style={styles.icon} source={coffeeAttributes[icon]} />
                <View style={styles.dots}>
                    {indicators.map((indicator, index) => <Indicator key={icon + index} fill={indicator} />)}
                </View>
            </View>
        )
    }
}

export default class DetailLexikonScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.coffee.name
    })

    render() {
        const { name, description, id, strength, water, milk, text } = this.props.navigation.state.params.coffee

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
                    <Text style={styles.header}>{name}</Text>
                    <Text style={styles.info}>{description}</Text>
                    <Image style={styles.image} source={coffeeImages[id]} />
                    <View style={styles.props}>
                        <IconWithIndicator dots={strength} icon="strength" />
                        <IconWithIndicator dots={water} icon="water" />
                        <IconWithIndicator dots={milk} icon="milk" />
                    </View>
                    <Text style={styles.text}>{text}</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    scrollView: {
        flexGrow: 1,
        backgroundColor: colors.secondary,
        alignItems: 'center'
    },
    header: {
        color: colors.black,
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10
    },
    info: {
        fontSize: 14,
        color: colors.black,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    text: {
        fontSize: 14,
        color: colors.black,
        textAlign: 'auto',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 30,
        marginTop: 20
    },
    icon: {
        width: 40,
        height: 40,
        margin: 25
    },
    props: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    traits: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    dots: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    filledCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.black,
        margin: 3
    },
    emptyCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.white,
        borderColor: colors.black,
        borderWidth: 2,
        margin: 3
    }
})
