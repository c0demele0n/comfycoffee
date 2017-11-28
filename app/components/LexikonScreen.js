import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import BottomNavigationContainer from './BottomNavigationContainer'

export default class LexikonScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.view}>
                <Button
                    onPress={() => navigate('DetailLexikon')}
                    title="DetailLexikon"
                />
                <BottomNavigationContainer
                    navigation={this.props.navigation}
                    activeTab={2}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
})
