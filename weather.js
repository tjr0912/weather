let handleWeatherResponse = function(response) {
  console.log(response)
  document.getElementById("current-conditions-text").innerHTML = response.currently.temperature.toFixed(0) + " and " + response.currently.summary
  document.getElementById("current-conditions-icon").innerHTML = icon(response.currently);
  $(".current").fadeIn(500);

  for(let i=1; i<=6; i++) {
    document.getElementById("forecast" + i + "-icon").innerHTML = icon(response.daily.data[i]);
    document.getElementById("forecast" + i + "-temp").innerHTML = response.daily.data[i].temperatureHigh.toFixed(0);
    document.getElementById("forecast" + i + "-text").innerHTML = response.daily.data[i].summary;
    $(".forecast").fadeIn(1500);
  }
}

window.onload = function() {
  document.getElementById("get-the-weather").addEventListener("click", function(event) {
    event.preventDefault();
    let locationName = document.getElementById("location-name").value;
    geocodeAndGetWeather(locationName);
  });
}
