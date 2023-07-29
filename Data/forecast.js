const { error } = require('console')
const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=743565fedad14c17944105401231807&q=' + latitude + ' , ' + longtitude
    request({ url, json: true }, (error, response) => {

        if (error) {
            callback(' Unable to connect weather service ', undefined)
        }
        else if (response.body.error) {
            callback(response.body.error.massege, undefined)
        }
        else {
            callback(undefined,  response.body.location.name + ' It is ' 
            + response.body.current.condition.text 
            + ' and Temperature is  ' + response.body.current.temp_c)
        }
    })
}

module.exports = forecast;