import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigationContainer from './BottomNavigationContainer'
import DetailLexikon from './DetailLocationScreen'

export default class LexikonScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.view}>
                <Text>Hello, LexikonScreen!</Text>
                <Button
                    onPress={() => navigate('DetailLexikon')}
                    title="Go to details"
                />
                <BottomNavigationContainer
                    navigation={this.props.navigation}
                    activeTab={2}
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
