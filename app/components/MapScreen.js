import React from 'react'
import { AppRegistry, StyleSheet, Dimensions, Text, View } from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigationContainer from './BottomNavigationContainer'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE = 37.78825
const LONGITUDE = -122.4324
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class MapScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                            latitude: LATITUDE,
                            longitude: LONGITUDE,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA
                        }}
                    />
                </View>
                <BottomNavigationContainer
                    navigation={this.props.navigation}
                    activeTab={0}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
})

MapScreen.propTypes = {
    provider: MapView.ProviderPropType
}
