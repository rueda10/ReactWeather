var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=f8d4483ea3b556821089aea64bd3b062&units=imperial";

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        // there was an error
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function(err) {
      throw new Error(err.response.data.message);
      // throw new Error("Unable to fetch weather for that location");
    });
  }
}
