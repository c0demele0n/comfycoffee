import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import BottomNavigationContainer from './BottomNavigationContainer'
import RNGooglePlaces from 'react-native-google-places'

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: 0,
            long: 0
        }
    }

    componentDidMount() {
        RNGooglePlaces.getCurrentPlace()
            .then(results => {
                const place = results[0]
                this.setState({
                    lat: place.latitude,
                    long: place.longitude
                })
            })
            .catch(error => console.log(error.message))
    }

    render() {
        const { navigate } = this.props.navigation
        const { lat, long } = this.state
        return (
            <View style={styles.view}>
                <Text>lat: {lat}</Text>
                <Text>long: {long}</Text>
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
