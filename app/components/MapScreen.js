import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import LocationItem from './LocationItem'
import { colors } from '../styles'

export default class MapScreen extends React.Component {
    render() {
        const { navigate, state } = this.props.navigation
        const { places } = state.params

        return (
            <View style={styles.view}>
                <ScrollView>
                    <LocationItem place={places[0]} navigate={navigate} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.secondary
    }
})
