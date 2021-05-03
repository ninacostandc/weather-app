function showTemp (response){
  let temperature = response.data.main.temp;
  let displayTemp = ("mainTemperature");
  displayTemp.innerHTML = temperature;
  let iconElement = document.querySelector ("#weather-icon");
  iconElement.setAttribute (src,`http://openweathermap.org/img/wn/10d@2x.png`);
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


let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let weekdays =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekdays[now.getDay()];

let displayDay = document.querySelector (".display-day-time")
displayDay.innerHTML= `${day}, ${hours}:${minutes}`