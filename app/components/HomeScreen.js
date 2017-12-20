import React from 'react'
import { StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native'
import { colors } from '../styles'

import { getPlace } from '../api'

export default class HomeScreen extends React.Component {
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
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigate('Karte')} title="Karte">
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
                <Button onPress={this.goToDetail.bind(this)} title="DetailLocation" />
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
