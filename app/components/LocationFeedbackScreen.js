import React from 'react'
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native'
import StarRating from 'react-native-star-rating'
import { colors, fontSizes } from '../styles'

class Review extends React.Component {
    render() {
        const { author_name, profile_photo_url, rating, relative_time_description, text } = this.props.review

        return (
            <View>
                <View style={styles.infoWrap}>
                    <Image style={styles.image} source={{ uri: profile_photo_url }} />
                    <View>
                        <Text style={styles.headline}>{author_name}</Text>
                        <Text style={styles.text}>({relative_time_description})</Text>

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
                    </View>
                </View>

                {text ? <Text style={styles.text}>{text}</Text> : null}

                <View style={styles.divider} />
            </View>
        )
    }
}

export default class LocationFeedbackScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.place.name
    })

    render() {
        const { reviews } = this.props.navigation.state.params.place

        return (
            <View style={styles.view}>
                <ScrollView style={styles.content}>
                    {reviews.map(review => <Review key={review.time} review={review} />)}
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
    content: {
        padding: 8
    },
    headline: {
        fontSize: fontSizes.l
    },
    paragraph: {
        marginBottom: 10
    },
    infoWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8
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
    divider: {
        paddingTop: 16,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1
    }
})
