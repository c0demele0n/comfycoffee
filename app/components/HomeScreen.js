import React from 'react'
import { View, Button, Text } from 'react-native'

export default class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Map')}
                    title="Chat with Lucy"
                />
            </View>
        )
    }
}
