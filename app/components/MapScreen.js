import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import LocationItem from './LocationItem'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { colors } from '../styles'

export default class MapScreen extends React.Component {
    render() {
        const { navigate, state } = this.props.navigation
        const { places, latitude, longitude } = state.params

        const markers = places.map(place => {
            const { id, name, geometry } = place
            const { lat, lng } = geometry.location

            return {
                position: {
                    latitude: lat,
                    longitude: lng
                },
                title: name,
                id
            }
        })

        console.log(markers)

        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.view}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                {markers.map(marker => (
                    <MapView.Marker key={marker.id} coordinate={marker.position} title={marker.title} />
                ))}
            </MapView>
            //             <View style={styles.view}>
            //                 <ScrollView>
            //                     <LocationItem place={places[0]} navigate={navigate} />

            //                 </ScrollView>
            //             </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        // flex: 1,
        // backgroundColor: colors.secondary
        height: '100%',
        width: '100%'
    }
})
