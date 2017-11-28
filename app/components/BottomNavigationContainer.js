import React from 'react'
import { StyleSheet, View } from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors, iconSizes } from '../styles'

export default class BottomNavigationContainer extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.view}>
                <BottomNavigation
                    labelColor={colors.primary}
                    activeLabelColor={colors.white}
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
                        barBackgroundColor={colors.primary}
                        label="Karte"
                        icon={
                            <Icon
                                size={iconSizes.m}
                                color={colors.white}
                                name="place"
                            />
                        }
                        onPress={() => navigate('Map')}
                    />
                    <Tab
                        barBackgroundColor={colors.primary}
                        label="Liste"
                        icon={
                            <Icon
                                size={iconSizes.m}
                                color={colors.white}
                                name="list"
                            />
                        }
                        onPress={() => navigate('List')}
                    />
                    <Tab
                        barBackgroundColor={colors.primary}
                        label="Lexikon"
                        icon={
                            <Icon
                                size={iconSizes.m}
                                color={colors.white}
                                name="book"
                            />
                        }
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
