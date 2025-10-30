// Your API Key
const API_KEY = "e2a5d7f1aaf28f0ecd25044d37fecac7";

// Getting the required elements
const weatherResult = document.getElementById("weatherResult");
const fetchWeatherBtn = document.getElementById("fetchWeatherBtn");

// Event listener for the button
fetchWeatherBtn.addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value;
  if (city.trim() === "") {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }
  await fetchWeatherData(city);
});

// Function to fetch weather data
async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    weatherResult.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

// Function to display fetched weather data
function displayWeatherData(data) {
  weatherResult.innerHTML = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Condition: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}
