var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=imperial&appid=1b08cdffa12bb8ccaed4267b2c84d72c';

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function(res){
            if(res.data.count){
                return res.data.list[0].main.temp;
            } else {
                throw new Error("City not found");
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
};