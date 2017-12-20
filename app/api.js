import axios from 'axios'

const apiKey = 'AIzaSyA2IUJMIsbu9b73rc-IPCfJm21CUBQ0B4w'

function handleError(error) {
    console.warn(error)
    return null
}

export async function getPlaces(lat = 49.634871, long = 8.345122) {
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
