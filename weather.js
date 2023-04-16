
const apiKey = "c16f0d2918b4ca6481ea92934d8edae7";

function fetchWeather() {
    const city = document.querySelector(".search input").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            checkWeather(data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}


const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


function checkWeather(data) {

    document.querySelector(".weather").style.display = "block";
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloudy.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/foggy.png"
    } else if (data.weather[0].main == "Light Snow") {
        weatherIcon.src = "images/snow.png"
    }

}

searchButton.addEventListener("click", () => {
    fetchWeather();
})
