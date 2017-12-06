import React from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableHighlight,
    Image,
    Button,
    Text,
    Alert
} from 'react-native'
// import Permissions from 'react-native-permissions'
import { getPlaces } from '../api'
import { colors } from '../styles'

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
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
        const { places } = this.state

        return (
            <View style={styles.view}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {places.map(place => (
                        <TouchableHighlight
                            key={place.id}
                            onPress={() => navigate('DetailLocation')}
                        >
                            <View style={styles.outer}>
                                <Text>
                                    Name: {place.name}
                                    {'\n'}
                                    Adresse: {place.vicinity}
                                    {'\n'}
                                    Rating: {place.rating}
                                </Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.secondary
    },
    outer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 120
    }
})
