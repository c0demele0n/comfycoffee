import React from 'react'
import { StyleSheet, View, ScrollView, Image, Button, Linking, Text } from 'react-native'
// import Permissions from 'react-native-permissions'
import Icon from 'react-native-vector-icons/MaterialIcons'
import StarRating from 'react-native-star-rating'
import { getPlaces, getPlace, getPhoto } from '../api'
import { colors, iconSizes } from '../styles'

class Location extends React.Component {
    constructor(props) {
        super(props)

        const { opening_hours } = this.props.place
        let isOpen = false
        if (opening_hours) {
            isOpen = opening_hours.open_now ? 'gerade geöffnet' : 'gerade geschlossen'
        }

        this.state = {
            photo: 'https://via.placeholder.com/160x160',
            isOpen
        }
    }

    componentWillMount() {
        const { photos } = this.props.place
        if (!photos) return

        const photo = getPhoto(photos)
        this.setState({ photo })
    }

    async goToDetail() {
        const { place, navigate } = this.props
        const { place_id } = place
        const placeDetails = await getPlace(place_id)

        navigate('DetailLocation', {
            place: placeDetails
        })
    }

    render() {
        const { place } = this.props
        const { photo, isOpen } = this.state
        const { name, vicinity, rating } = place

        return (
            <View style={styles.outer}>
                <View style={styles.infoWrap}>
                    <Image style={styles.image} source={{ uri: photo }} />
                    <View>
                        <Text style={styles.text}>{name}</Text>
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

                <View style={styles.callToAction}>
                    <Button onPress={this.goToDetail.bind(this)} title="Details" color={colors.primary} />
                    <Button
                        onPress={() =>
                            Linking.openURL(`https://maps.google.com/?daddr=${name},${vicinity}&directionsmode=walking`)
                        }
                        title="Route"
                        color={colors.primary}
                    />
                </View>

                <View style={styles.divider} />
            </View>
        )
    }
}

export default class ListScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            places: []
        }
    }

    async componentWillMount() {
        const places = await getPlaces()
        console.log(places)
        this.setState({ places })

        // Permissions.check('location', 'always').then(response => {
        //     // TODO: check permission response
        //     console.log('get current position')
        //     return navigator.geolocation.getCurrentPosition(
        //         position => {
        //             console.log('got current position')
        //             this.setState({
        //                 lat: position.coords.latitude,
        //                 long: position.coords.longitude
        //             })
        //         },
        //         // TODO: solve "Unable to fetch location" error
        //         error => console.log(error.message),
        //         { timeout: 5000 }
        //     )
        // })
    }

    render() {
        const { navigate } = this.props.navigation
        const { places } = this.state

        return (
            <View style={styles.view}>
                <ScrollView>
                    {places.map(place => <Location key={place.id} place={place} navigate={navigate} />)}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.secondary
    },
    outer: {
        padding: 8
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
        alignItems: 'center'
    },
    divider: {
        paddingTop: 8,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1
    }
})
