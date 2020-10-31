//Global Variables
var citiesList = $(#city-list)
var cities = []

init ();
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
}