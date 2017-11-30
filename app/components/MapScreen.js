import React from 'react'
import { StyleSheet, View, Button, Text, Alert } from 'react-native'
import BottomNavigationContainer from './BottomNavigationContainer'
// import Permissions from 'react-native-permissions'
import { getPlaces } from '../api'

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: 49.634871,
            long: 8.345122,
            places: []
        }
    }

    async componentDidMount() {
        const places = await getPlaces()
        console.log(places)
        this.setState({ places })

        // Permissions.check('location', 'always').then(response => {
        //     // TODO: check permission response
        //     console.log('get current position')
        //     return navigator.geolocation.getCurrentPosition(
        //         position => {
        //             console.log('got current position')
        //             this.setState({
        //                 lat: position.coords.latitude,
        //                 long: position.coords.longitude
        //             })
        //         },
        //         // TODO: solve "Unable to fetch location" error
        //         error => console.log(error.message),
        //         { timeout: 5000 }
        //     )
        // })
    }

    render() {
        const { navigate } = this.props.navigation
        const { lat, long, places } = this.state

        return (
            <View style={styles.view}>
                <Text>lat: {lat}</Text>
                <Text>long: {long}</Text>

                {places.map((place, index) => (
                    <Text key={place.id}>
                        {index}. {place.name}
                    </Text>
                ))}

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
