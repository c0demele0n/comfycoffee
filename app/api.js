import axios from 'axios'

const apiKey = 'AIzaSyA2IUJMIsbu9b73rc-IPCfJm21CUBQ0B4w'

function handleError(error) {
    console.warn(error)
    return null
}

export async function getPlaces(lat, long) {
    const encodedURI = window.encodeURI(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&rankby=distance&type=cafe&key=${apiKey}`
    )
    const places = await axios.get(encodedURI).catch(handleError)
    return places.data.results
}

export async function getPlace(id = 'ChIJrTLr-GyuEmsRBfy61i59si0') {
    const encodedURI = window.encodeURI(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${apiKey}`
    )

    const place = await axios.get(encodedURI).catch(handleError)
    return place.data.result
}

export function getPhoto(photos, width = 160) {
    const ref = photos[0].photo_reference
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${width}&photoreference=${ref}&key=${apiKey}`
}

export function calculateDistance(latitude, longitude, destination) {
    const radius = 6371 //km
    const currentPositionlatRad = toRadians(latitude)
    const destinationLatRad = toRadians(destination.geometry.location.lat)
    const deltaLat = toRadians(destination.geometry.location.lat - latitude)
    const deltaLon = toRadians(destination.geometry.location.lng - longitude)

    const a =
        Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(currentPositionlatRad) * Math.cos(destinationLatRad) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    const distance = radius * c
    return Math.round(distance * Math.pow(10, 2)) / Math.pow(10, 2)
}

toRadians = function(degree) {
    return degree * (Math.PI / 180)
}
