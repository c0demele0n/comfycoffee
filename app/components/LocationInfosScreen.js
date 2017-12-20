import React from 'react'
import { StyleSheet, View, ScrollView, Image, Button, Linking, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import StarRating from 'react-native-star-rating'
import { getPhoto } from '../api'
import { colors, iconSizes, fontSizes } from '../styles'

export default class LocationInfoScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.place.name
    })

    constructor(props) {
        super(props)

        this.state = {
            photo: 'https://via.placeholder.com/640x360',
            isOpen: false
        }
    }

    async componentWillMount() {
        const { opening_hours, photos } = this.props.navigation.state.params.place
        let isOpen = false

        if (opening_hours) isOpen = opening_hours.open_now ? 'gerade geöffnet' : 'gerade geschlossen'
        this.setState({ isOpen })

        if (!photos) return
        const photo = getPhoto(photos, 1280)
        this.setState({ photo })
    }

    render() {
        const {
            name,
            formatted_address,
            formatted_phone_number,
            rating,
            website
        } = this.props.navigation.state.params.place
        const { isOpen, photo } = this.state

        return (
            <View style={styles.view}>
                <ScrollView>
                    <Image style={styles.image} resizeMode="cover" source={{ uri: photo }} />

                    <View style={styles.content}>
                        <Text style={styles.headline}>{name}</Text>
                        <Text style={styles.paragraph}>{formatted_address}</Text>
                        <Text>{formatted_phone_number}</Text>
                        <Text style={styles.paragraph}>{website}</Text>

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

                        {rating && (
                            <View style={styles.rating}>
                                <View style={styles.stars}>
                                    <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={rating}
                                        selectedStar={rating => this.onStarRatingPress(rating)}
                                        starColor={colors.yellow}
                                        starSize={30}
                                        buttonStyle={{ marginRight: 5 }}
                                    />
                                </View>
                                <View style={styles.stars}>
                                    <Text style={styles.subline}>{rating} Sterne</Text>
                                </View>
                            </View>
                        )}
                    </View>

                    <Button
                        onPress={() =>
                            Linking.openURL(
                                `https://maps.google.com/?daddr=${name},${formatted_address}&directionsmode=walking`
                            )
                        }
                        title="Route"
                        color={colors.primary}
                    />
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
    image: {
        width: null,
        height: 200
    },
    content: {
        padding: 8
    },
    headline: {
        fontSize: fontSizes.l,
        marginBottom: 10
    },
    openingHours: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    openingHoursIcon: {
        marginRight: 5
    },
    rating: {
        marginTop: 30,
        marginBottom: 30
    },
    stars: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    subline: {
        fontSize: fontSizes.l,
        marginTop: 5
    },
    paragraph: {
        marginBottom: 10
    }
})
