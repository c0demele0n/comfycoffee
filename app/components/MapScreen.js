import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import BottomNavigationContainer from './BottomNavigationContainer'
import RNGooglePlaces from 'react-native-google-places'

export default class MapScreen extends React.Component {
    componentDidMount() {
        RNGooglePlaces.getCurrentPlace()
            .then(results => console.log(results))
            .catch(error => console.log(error.message))
    }

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
