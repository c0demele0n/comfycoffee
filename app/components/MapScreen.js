import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigationContainer from './BottomNavigationContainer'
import DetailLocation from './DetailLocationScreen'

export default class MapScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.view}>
                <Text>Hello, Map Navigation!</Text>
                <Button
                    onPress={() => navigate('DetailLocation')}
                    title="Go to details"
                />
                <BottomNavigationContainer
                    navigation={this.props.navigation}
                    activeTab={0}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
})
