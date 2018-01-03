import React from 'react'
import { StyleSheet, View, Button, TouchableOpacity, Image, Alert } from 'react-native'
import Permissions from 'react-native-permissions'
import { getPlaces, getPlace, getPhoto, calculateDistance } from '../api'
import { colors } from '../styles'

export default class HomeScreen extends React.Component {
    async fetchPlaces(position) {
        const { navigate } = this.props.navigation

        const latitude = position ? position.coords.latitude : 49.634871
        const longitude = position ? position.coords.longitude : 8.345122

        const rawPlaces = await getPlaces(latitude, longitude)
        const places = rawPlaces.map(place => {
            const { opening_hours, photos } = place

            place.isOpen = false
            place.photo = 'https://via.placeholder.com/160x160'

            if (opening_hours) {
                place.isOpen = opening_hours.open_now ? 'gerade geöffnet' : 'gerade geschlossen'
            }

            if (photos) {
                place.photo = getPhoto(photos)
            }

            place.distance = calculateDistance(latitude, longitude, place)

            return place
        })

        console.log(places)

        navigate('Location', { places, latitude, longitude })
    }

    async getCurrentPosition() {
        const self = this
        console.log('get current position')

        async function success(position) {
            console.log('got current position')
            self.fetchPlaces(position)
        }

        async function error(error) {
            console.log(error.message)
            self.fetchPlaces()
        }

        const options = {
            timeout: 5000
        }

        navigator.geolocation.getCurrentPosition(success, error, options)
        // TODO: solve "Unable to fetch location" error
    }

    async checkPermission() {
        const permission = await Permissions.check('location', 'always')
        console.log(permission)

        if (permission == 'authorized' || permission == 'denied') {
            this.getCurrentPosition()
        } else {
            Alert.alert('Can we access your location?', 'We need access so we can show you nearby places.', [
                {
                    text: 'No way',
                    style: 'cancel'
                },
                { text: 'Open Settings', onPress: Permissions.openSettings }
            ])
        }
    }

    async goToDetail() {
        const { navigate } = this.props.navigation
        const placeDetails = await getPlace()

        navigate('DetailLocation', {
            place: placeDetails
        })
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.view}>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={this.checkPermission.bind(this)}
                    title="Karte"
                >
                    <Image style={styles.imageMarker} source={require('../assets/kaffeemarker.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={() =>
                        navigate('Lexikon', {
                            lexikon: true
                        })
                    }
                    title="Lexikon"
                >
                    <Image style={styles.imageBook} source={require('../assets/books.png')} />
                </TouchableOpacity>
                {/* <Button onPress={this.goToDetail.bind(this)} title="DetailLocation" /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.secondary,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageMarker: {
        width: 170,
        height: 170,
        marginBottom: 50
    },
    imageBook: {
        width: 130,
        height: 130,
        marginBottom: 20
    }
})
