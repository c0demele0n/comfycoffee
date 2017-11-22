import React from 'react'
import { View, Button, Text } from 'react-native'
import DetailLocationScreen from './DetailLocationScreen'

export default class MapScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text>Hello, Map Navigation!</Text>
                <Button
                    onPress={() => navigate('DetailLocation')}
                    title="Go to details"
                />
            </View>
        )
    }
}
