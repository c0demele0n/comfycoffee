import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Image, Button, Linking, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import StarRating from 'react-native-star-rating'
import { getPlace } from '../api'
import { colors, iconSizes } from '../styles'

export default class Location extends React.Component {
    async goToDetail() {
        const { place, navigate } = this.props
        const { place_id, distance } = place
        const placeDetails = await getPlace(place_id)
        placeDetails.distance = distance
        console.log(placeDetails)
        navigate('DetailLocation', {
            place: placeDetails
        })
    }

    render() {
        const { place, divider } = this.props
        const { name, vicinity, rating, isOpen, photo, distance } = place

        const maxLen = 35
        const finalName = name.length > maxLen ? name.substring(0, maxLen - 1) + '...' : name;

        return (
            <View style={styles.view}>
                <View style={styles.outer}>
                    <View style={styles.infoWrap}>
                        <Image style={styles.image} source={{ uri: photo }} />
                        <View>
                            <Text style={styles.text}>{finalName}</Text>
                            <Text style={styles.text}>{vicinity}</Text>

                            {rating && (
                                <View style={styles.rating}>
                                    <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={rating}
                                        selectedStar={rating => this.onStarRatingPress(rating)}
                                        starColor={colors.yellow}
                                        starSize={20}
                                        buttonStyle={{ marginRight: 5 }}
                                    />
                                </View>
                            )}

                            {isOpen && (
                                <View style={styles.openingHours}>
                                    <Icon
                                        style={styles.openingHoursIcon}
                                        size={iconSizes.s}
                                        color={isOpen == 'gerade geschlossen' ? colors.red : colors.green}
                                        name="watch-later"
                                    />
                                    <Text>{isOpen}</Text>
                                </View>
                            )}
                        </View>
                    </View>
                    <View style={styles.bottomRow}>
                        <View style={styles.directionsWalk}>
                            <Icon
                                style={styles.directionsWalkIcon}
                                size={iconSizes.s}
                                color={colors.darkblue}
                                name="directions-walk"
                            />
                            <Text>{distance} km</Text>
                        </View>

                        <View style={styles.callToAction}>
                            <Button
                                style={styles.callToActionButton}
                                onPress={this.goToDetail.bind(this)}
                                title="Details"
                                color={colors.primary}
                            />
                            <Text>&nbsp;&nbsp;&nbsp;</Text>
                            <Button
                                style={styles.callToActionButton}
                                onPress={() =>
                                    Linking.openURL(
                                        `https://maps.google.com/?daddr=${name},${vicinity}&directionsmode=walking`
                                    )
                                }
                                title="Route"
                                color={colors.primary}
                            />
                        </View>
                    </View>

                        {divider && <View style={styles.divider} />}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.white
    },
    outer: {
        padding: 8,
        backgroundColor: colors.secondary
    },
    infoWrap: {
        flexDirection: 'row'
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 8,
        borderRadius: 40
    },
    text: {
        flex: -1
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    openingHours: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    openingHoursIcon: {
        marginRight: 5
    },
    callToAction: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 5
    },
    divider: {
        paddingTop: 8,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1
    },
    directionsWalk: {
        marginLeft: 8,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    directionsWalkIcon: {
        marginRight: 5
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
