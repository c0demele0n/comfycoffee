import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class DetailLexikonScreen extends React.Component {
    render() {
        const { state } = this.props.navigation
        var coffee = state.params ? state.params.coffee : '<undefined>'
        return (
            <View style={styles.view}>
                <Text>{coffee.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
})
