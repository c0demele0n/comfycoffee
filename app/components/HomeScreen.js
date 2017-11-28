import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

export default class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.view}>
                <Button onPress={() => navigate('Map')} title="Karte" />
                <Button onPress={() => navigate('Lexikon')} title="Lexikon" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
})
