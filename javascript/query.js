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