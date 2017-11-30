import axios from 'axios'

const apiKey = 'AIzaSyA2IUJMIsbu9b73rc-IPCfJm21CUBQ0B4w'

function handleError(error) {
    console.warn(error)
    return null
}

export async function getPlaces(
    lat = 49.634871,
    long = 8.345122,
    radius = 10000, // in m
    type = 'cafe'
) {
    const encodedURI = window.encodeURI(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
            lat
        },${long}&radius=${radius}&type=${type}&key=${apiKey}`
    )

    const places = await axios.get(encodedURI).catch(handleError)

    return places.data.results
}
