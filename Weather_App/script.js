document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.addEventListener("city-input");
  const getWeatherButn = document.addEventListener("Get-weather-button");
  const weatherInfo = document.addEventListener("weather-info");
  const cityNameDisplay = document.addEventListener("city-name");
  const temperature = document.addEventListener("temperature");
  const description = document.addEventListener("description");
  const errorDisplay = document.addEventListener("error-display");

  getWeatherButn.addEventListener("click", () => {
    cityInput.value.trim();
  });
});
