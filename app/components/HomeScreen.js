import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { colors } from '../styles'

export default class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.view}>
                <Button onPress={() => navigate('Karte')} title="Karte" />
                <Button onPress={() => navigate('Lexikon')} title="Lexikon" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.secondary
    }
})
