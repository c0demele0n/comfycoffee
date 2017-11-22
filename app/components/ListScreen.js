import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigationContainer from './BottomNavigationContainer'
import DetailLocation from './DetailLocationScreen'

export default class ListScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.view}>
                <Text>Hello, ListScreen!</Text>
                <Button
                    onPress={() => navigate('DetailLocation')}
                    title="Go to details"
                />
                <BottomNavigationContainer
                    navigation={this.props.navigation}
                    activeTab={1}
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
