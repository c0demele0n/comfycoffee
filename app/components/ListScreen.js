import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import BottomNavigationContainer from './BottomNavigationContainer'

export default class ListScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.view}>
                <Button
                    onPress={() => navigate('DetailLocation')}
                    title="DetailLocation"
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
