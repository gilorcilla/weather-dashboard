//Global Variables
var citiesList = $("#city-list")
var cities = []

init ();

//Local Storage
function  renderCities(){
    if (cities.length > 5){
        cities.shift();
    }
    for (var i = 0; i < cities.length;  i++){
        let city = cities[i];
        let li = $("<li>");
        let button = $("<button>");
        button.text(city);
        button.attr("data-index", i);
        button.attr("style", "width: 100%");
        button.addClass("btn shadow-box hist-button text-black");
        li.append(button);
        $("city-list").prepend(li);
        $("city-list").prepend("<br>");

    }
}

function init(){

    $("city-list").empty();

    let storedCities = JSON.parse(localStorage.getItem("cities"));
    if (storedCities !== null){
        cities = storedCities;
    }
    renderCities();

}


$(".search-button").on("click", function (event) {
    event.preventDefault();
 var city= $("#search-term").val();
    currentWeather(city)
    forecastWeather(city)
    // $("#current-day-forecast").empty();
    // $("five-day-forecast").empty();
    // let searchHistory = $("#search-term").val().trim();
  
    let cities = JSON.parse(localStorage.getItem("cities"));
    cities.push(city)
    localStorage.setItem("cities", JSON.stringify(cities));
    $("#search-term").val(null)
})

    function currentWeather(city){
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city +"&appid=d505d181bc232a369cacbc75835c8e23&units=imperial"
    
    // Project1(Coding Bootcamp)
    // d505d181bc232a369cacbc75835c8e23"
    // let fiveDayQueryURL;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (fiveData){
        // buildFiveDayForecast(fiveData)
        console.log(fiveData);
        
        $("#current-day-forecast").html(`
        <div>
        <h1>${city}</h1>
        <h3>Temp: ${fiveData.main.temp}</h3>
        <img src="" />
        <h1>windspeed${fiveData.wind.speed}</h1>
        <h1>humidity${fiveData.main.humidity}</h1>
        <h1>description${fiveData.weather[0].description}</h1>
        </div>
        
        
        `)
        var lat = fiveData.coord.lat
        var long = fiveData.coord.lon
        uvInfo(lat,long)
    })

}
function forecastWeather(city){
    queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+city +"&appid=d505d181bc232a369cacbc75835c8e23&units=imperial"
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    // Project1(Coding Bootcamp)
    // d505d181bc232a369cacbc75835c8e23"
    // let fiveDayQueryURL;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (fiveData){
        // buildFiveDayForecast(fiveData)
        console.log(fiveData);
        var data=fiveData.list
        var htmlString=""
        for(let i=0; i<data.length; i=i+8){
            htmlString+=`<div>
            <h1>${data[i].dt_txt}</h1>
            <h3>Temp: ${data[i].main.temp}</h3>
            <img src="" />
            <h1>windspeed${data[i].wind.speed}</h1>
            <h1>humidity${data[i].main.humidity}</h1>
            <h1>description${data[i].weather[0].description}</h1>
            </div>`

        }
        
        
        
        
        console.log(htmlString)
        $("#five-day-forecast").html(htmlString)
    })
}
function uvInfo(){

    var uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + data.coord.lat + "&long=" + data.coord.long + "&appid=d505d181bc232a369cacbc75835c8e23"

   

    $.ajax({
        url: uvQueryURL,
        method: "GET"
    })
    .then(function (response){
        let uvIndexEl = response.value
        uvIndexTag = $("<p>").text("UV Index: " + uvIndexEl)
        $("#uv").html(uvIndexTag)
        //console.log(response);
    })
 
    

}

$("#city-list").on("click", "button", function(){

    $("#current-day-forecast").empty();
    $("#five-day-forecast").empty();
    let searchHistory = $(this).text();
    queryURLHist  = buildQueryUrl(searchHistory);

    $.ajax({
        url: queryURLHist,
        method: "GET"
    })
    .then(function (data){
        buildCurrentWeatherCard(data)
        let uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=d505d181bc232a369cacbc75835c8e23"
    
    $.ajax({
        url: uvIndexTag,
        method: "GET"
    })
    .then(function(response){
        let uvIndexEl = response.value;
        uvIndexTag = $("<p>").text("UV Index: " + uvIndexEl);
        $(".current-day-weather").append(uvIndexTag);

    })

    fiveDayQueryURL = buildFiveDayQueryUrl(data);

    $.ajax({
        url: fiveDayQueryURL,
        method: "GET"
    })
    .then (function (fiveData){
        buildFiveDayForecast(fiveData)
    })
    })
})


