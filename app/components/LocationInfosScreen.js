import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../styles'

export default class LocationInfoScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return <View style={styles.view} />
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.secondary
    }
})
