import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import LocationItem from './LocationItem'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { colors } from '../styles'

export default class MapScreen extends React.Component {
    render() {
        const { navigate, state } = this.props.navigation
        const { places } = state.params

        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.view}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />
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
