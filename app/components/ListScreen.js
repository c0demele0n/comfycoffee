import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { colors } from '../styles'

export default class ListScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.view}>
                <Button
                    onPress={() => navigate('DetailLocation')}
                    title="DetailLocation"
                />
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
