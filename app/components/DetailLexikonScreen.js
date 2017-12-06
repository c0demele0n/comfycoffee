import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class DetailLexikonScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.coffee.name
    })
    render() {
        const { name } = this.props.navigation.state.params.coffee
        return (
            <View style={styles.view}>
                <Text>{name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
})
