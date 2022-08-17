"use strict";

window.addEventListener("load", inputField);

function inputField() {
    const section1 = document.querySelector(".forecast__section1");
    let search = "";
    search += `
    <div class="forecast__input">
    <label for="">Enter your city:</label>
    <input type="text" />
    <button>Submit</button>
    </div>`;
    section1.innerHTML = search;
    const button = document.querySelector("button");
    const input = document.querySelector("input");
    button.addEventListener("click", returnWeatherData);
    input.addEventListener("keydown", function (e) {
        if (e.code === "Enter" || e.code === "NumpadEnter") returnWeatherData();
    });
    function returnWeatherData() {
        const requestedCity = input.value;
        const apiKey = "85add405e97d42ec70e6dce85062e260";
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${requestedCity}&lang=en-us&units=metric&appid=${apiKey}`
        )
            .then((response) => response.json())
            .then((data) => renderData(data));
    }
    function renderData(data) {
        const forecastData = document.querySelector(".forecast__data");
        forecastData.style.visibility = "visible";
        if (data.cod === "404") {
            let error = "";
            error += `                
            <div class="forecast__error">
            <h4>${data.message.toUpperCase()}! PLEASE, TRY AGAIN.</h4>
            </div>`;
            forecastData.innerHTML = error;
        }
        let displayData = "";
        let unixTimestamp1 = data.sys.sunrise;
        let unixTimestamp2 = data.sys.sunset;
        let timeSunrise = new Date(unixTimestamp1 * 1000).toLocaleTimeString(
            "default"
        );
        let timeSunset = new Date(unixTimestamp2 * 1000).toLocaleTimeString(
            "default"
        );
        displayData += `<h2>Weather data for ${data.name}:</h2>
        <ul>
            <ul>
                <h4 class='forecast__headline--data'>Other description:</h4>
                <li>Selected country: ${data.sys.country}</li><hr>
                <li>Selected city: ${data.name}</li><hr>
                <li>Sunrise: ${timeSunrise}</li><hr>
                <li>Sunset: ${timeSunset}</li><hr>
            </ul>
            <h4 class='forecast__headline--data'>Weather description:</h4>
            <li>Main weather type: ${data.weather[0].main}</li><hr>
            <li>Detailed weather type: ${data.weather[0].description}</li><hr>
            <div class='img'>
            <p>Weather type:<img src=${
                "http://openweathermap.org/img/wn/" +
                data.weather[0].icon +
                "@2x.png"
            } height=30px></p></div><hr>
        </ul>
        <ul>
            <h4 class='forecast__headline--data'>Temp. description:</h4>
            <li>Current temperature: ${data.main.temp.toFixed(0)} °C</li><hr>
            <li>Feels like: ${data.main.feels_like.toFixed(0)} °C</li><hr>
            <li>Today max: ${data.main.temp_max.toFixed(0)} °C</li><hr>
            <li>Air pressure: ${data.main.pressure.toFixed(
                0
            )} millibars </li><hr>
            <li>Humidity: ${data.main.humidity.toFixed(0)} %</li><hr>
        </ul>
        <ul>
            <h4 class='forecast__headline--data'>Wind description:</h4>
            <li>Wind speed: ${data.wind.speed.toFixed(1)} m/s</li><hr>
            <li>Wind direction: ${data.wind.deg.toFixed(0)} °</li><hr>
        </ul>`;
        forecastData.innerHTML = displayData;
    }
}
