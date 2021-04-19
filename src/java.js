function showTemp (response){
  let temperature = response.data.main.temp;
  let displayTemp = ("mainTemperature");
  displayTemp.innerHTML = temperature;
}

function showCity (response) {
  response.preventDefault();
  let city = document.querySelector ("#search-form");
  city.innerHTML = `${city.value}`;
  let apiKey= "3ce60030f6a7cefb14f74f4e525a83ac";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp)
}
let form = document.querySelector("#search-form")
form.addEventListener ("submit", showCity)

function showPosition (position) {
  let lat= position.coords.latitude;
  let lon= position.coords.longitude;
  let country = document.querySelector (".country");
  country.innerHTML = `${position.country}`;
  let apiKey= "3ce60030f6a7cefb14f74f4e525a83ac";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp)
}

function getCurrentPosition(){
  navigator.geolocation.getCurrentPosition(showPosition);  
}

let button = document.querySelector ("button");
button.addEventListener ("click", getCurrentPosition)

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let weekdays =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekdays[now.getDay()];

let displayDay = document.querySelector (".display-day-time")
displayDay.innerHTML= `${day}, ${hours}:${minutes}`