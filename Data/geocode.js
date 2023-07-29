const { error } = require('console')
const request = require('request')

const geocode = (address, callback) => {
    const geocoder = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw'
    request({ url: geocoder, json: true }, (error, response) => {

        if (error) {
            callback('nable to connect geocode Service', undefined)
        }
        else if (response.body.massege) {
            callback(response.body.massege, undefined)
        }
        else if (response.body.features.length == 0) {
            callback('Unable to find location', undefined)
        }
        else {
            callback (undefined , {
                longtitude :  response.body.features[0].center[0] ,
                latitude : response.body.features[0].center[1]
           } )
        }
    })
}
module.exports = geocode;