import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import LocationItem from './LocationItem'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { colors } from '../styles'

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            region: {
                latitude: 49.634871,
                longitude: 8.345122,
                latitudeDelta: 0.1,
                longitudeDelta: 0.05
            },
            markers: [],
            currentPlace: null
        }
    }

    componentWillMount() {
        const { places, latitude, longitude } = this.props.navigation.state.params
        let minLat = (maxLat = minLong = maxLong = false)

        const markers = places.map((place, index) => {
            const { id, name, geometry } = place
            const { lat, lng } = geometry.location

            if (index < 5) {
                minLat = minLat ? Math.min(minLat, lat) : lat
                maxLat = maxLat ? Math.max(maxLat, lat) : lat
                minLong = minLong ? Math.min(minLong, lng) : lng
                maxLong = maxLong ? Math.max(maxLong, lng) : lng
            }

            return {
                position: {
                    latitude: lat,
                    longitude: lng
                },
                id
            }
        })

        const latitudeDelta = Math.max(Math.abs(latitude - minLat), Math.abs(latitude - maxLat)) * 2 + 0.001
        const longitudeDelta = Math.max(Math.abs(longitude - minLong), Math.abs(longitude - maxLong)) * 2 + 0.001

        this.setState({
            region: {
                latitude,
                longitude,
                latitudeDelta,
                longitudeDelta
            },
            markers
        })
    }

    onRegionChange(region) {
        const { longitudeDelta, latitudeDelta } = region
        if (longitudeDelta > 10 || latitudeDelta > 10) return

        this.setState({ region })
    }

    handleMarkerPress(event) {
        const { id } = event.nativeEvent
        const place = this.props.navigation.state.params.places.filter(place => place.id == id)[0]
        const { lat, lng } = place.geometry.location
        const { latitudeDelta, longitudeDelta } = this.state.region

        this.setState({
            region: {
                latitude: lat,
                longitude: lng,
                latitudeDelta,
                longitudeDelta
            },
            currentPlace: place
        })
    }

    render() {
        const { navigate } = this.props.navigation
        const { latitude, longitude } = this.props.navigation.state.params
        const { region, markers, currentPlace } = this.state
        const currentPosition = { latitude, longitude }

        return (
            <View style={styles.view}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={region}
                    onRegionChange={this.onRegionChange.bind(this)}
                >
                    <MapView.Marker coordinate={currentPosition} pinColor="#4D9C58" />
                    {markers.map(marker => (
                        <MapView.Marker
                            key={marker.id}
                            coordinate={marker.position}
                            identifier={marker.id}
                            onPress={event => this.handleMarkerPress(event)}
                        />
                    ))}
                </MapView>
                <View style={styles.overlay}>
                    {currentPlace && <LocationItem key={currentPlace.id} place={currentPlace} navigate={navigate} />}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.secondary,
        height: '100%',
        width: '100%'
    },
    map: {
        height: '100%',
        width: '100%'
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    }
})
