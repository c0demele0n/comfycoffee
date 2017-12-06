import React from 'react'
import { StyleSheet, View } from 'react-native'

export default class LocationFeedbackScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return <View style={styles.view} />
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
})
