import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class BottomNavigationContainer extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.view}>
                <BottomNavigation
                    labelColor="#933F00"
                    activeLabelColor="white"
                    rippleColor="white"
                    style={{
                        height: 56,
                        elevation: 8,
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        right: 0
                    }}
                    activeTab={this.props.activeTab}
                >
                    <Tab
                        barBackgroundColor="#933F00"
                        label="Karte"
                        icon={<Icon size={24} color="white" name="place" />}
                        onPress={() => navigate('Map')}
                    />
                    <Tab
                        barBackgroundColor="#933F00" //"rgba(147, 63, 0, 0.3)"
                        label="Liste"
                        icon={<Icon size={24} color="white" name="list" />}
                        onPress={() => navigate('List')}
                    />
                    <Tab
                        barBackgroundColor="#933F00" //"rgba(147, 63, 0, 0.3)"
                        label="Lexikon"
                        icon={<Icon size={24} color="white" name="book" />}
                        onPress={() => navigate('Lexikon')}
                    />
                </BottomNavigation>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
})
