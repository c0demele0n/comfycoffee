import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigationContainer from './BottomNavigationContainer'

export default class DetailLexikonScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.view}>
                <Text>Hello, DetailLexikonScreen!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
})
