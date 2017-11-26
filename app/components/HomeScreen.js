import React from 'react'
import { View, Button, Text } from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigationContainer from './BottomNavigationContainer'

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

                <BottomNavigationContainer
                    navigation={this.props.navigation}
                    activeTab={0}
                />
            </View>
        )
    }
}
