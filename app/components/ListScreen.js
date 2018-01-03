import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import LocationItem from './LocationItem'
import { colors } from '../styles'

export default class ListScreen extends React.Component {
    render() {
        const { navigate, state } = this.props.navigation
        const { places } = state.params

        return (
            <View style={styles.view}>
                <ScrollView>
                    {places.map(place => (
                        <LocationItem key={place.id} place={place} navigate={navigate} divider="true" />
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
    }
})
