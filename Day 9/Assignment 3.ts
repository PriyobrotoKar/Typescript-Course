//! Question 3:
//? You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.

type WeatherData = [string, number, string];
const city1: WeatherData = ["Kolkata", 30, "Rainy"];
const city2: WeatherData = ["Mumbai", 22, "Overcast"];
const city3: WeatherData = ["Delhi", 36, "Sunny"];
const cities = [city1, city2, city3];
const displayWeather = (cities: WeatherData[]) => {
  const cityInfo: object[] = [];
  cities.forEach((element) => {
    const [name, temp, condi] = element;
    cityInfo.push({ City: name, Temperature: temp, Condition: condi });
  });
  return cityInfo;
};
console.table(displayWeather(cities));
