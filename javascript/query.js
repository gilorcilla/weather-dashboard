// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

function buildQueryUrl(searchHistory) {
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?";
    let queryParams = { "appid": "804a431c119b5a58e4b92afb5b02a0c7" }
    queryParams.q  = searchHistory
    queryParams.units = "imperial"
    return queryURL + $.param(queryURL):

}

function buildCurrentWeatherCard (data, weatherData, weatherCard, cityDataEl, tempEl, humidityEl, windspeedEl, weathericon){
    $(weatherCard).append(cityDataEl);
    $(weatherCard).append(weathericon);
    $(weatherCard).append(tempEl);
    $(weatherCard).append(humidityEl);
    $(weatherCard).append(windspeedEl);
    $("#current-day-forecast").append(weatherCard);

}

function buildCurrentWeatherCard(data){
    var date = moment().format("MMM DD YY");
    var weatherData = data;
    var currentWeatherIcon =data.weather [0].icon;
    var currentWeatherIconEl = "https://openweathermap.org/img/wn/" + currentWeatherIcon + "@2x.png";
    var weathericon = $("<img/>", {
        id: "weather-icon",
        src: currentWeatherIconEl,
        width: 75
    });
    var currentTemp = Math.floor(weatherData.main.temp);
    var weatherCard = $("<div>").addClass("card weather-card opacity-4 text-black font-weight-bold border border-white current-day-weather");
    var cityDataEl = $("<h5>").addClass("card-title").text(weatherData.name + " " + "(" + date + ")");
    var tempEl = $("<p>").addClass("card-text").text("Temp: " + currentTemp + "F");
    var humidityEl = $("<p>").addClass("card-text text-nowrap").text("Humidity: " + weatherData.main.humidity + " % ");
    var windspeedEl = $("<p>").addClass("card-text").text("Windspeed: " + weatherData.wind.speed + "mph");

    buildCurrentWeatherCard (data, weatherData, weatherCard, cityDataEl, tempEl, humidityEl, windspeedEl, weathericon);

}

function buildFiveDayForecast(fiveData){

    fiveDayList = fiveData.list;
    for (var i =4; i < fiveDayList.length; i +=8){
        let fiveDayList = fiveDayList[i];
        let dateYear = day.dt_txt.slice(0,4);
        let dateMonth = day.dt_txt.slice(5,7);
        let dateDay = day.dt_txt.slice(8,10);
        let dateIcon = day.weather[0].icon;
        let dayWeatherIcon =  "https://openweathermap.org/img/wn" + dayIcon + ".png";
        let dayIconEl = $("<img>",{
            id:  "weather-icon",
            src: dayWeatherIcon,
            width: 50
        })
        let day
    }
}