function formatdate (timestamp){
let now = new Date(timestamp);
let hours = now.getHours();
if (hours<10){
  hours=`0${hours}`;
}
let minutes = now.getMinutes();
if (minutes<10){
  minutes=`0${minutes}`;
}
let weekdays =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekdays[now.getDay()];
return `${day}, ${hours}:${minutes}`;
}

function displayForescast (){
  let forecastElement = document.querySelector ("#forecast");
  let forecastHTML= `<div class="row">`;
  let days = ["Mon", "Thu", "Wed", "Thu", "Fri"];
  days.forEach(function(day){
forcastHTML= forescastHTML + `
      <div class="col-2">
      <span class="forecast-day">${day}</span>
        <div class="card">              
         <div class="card-body">
          <p class="card-text">
            <span class="forecastmin">28º   </span>
            <span class="forecastmax">32º</span>
            </p> 
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" id="weather-icon-forecast" width="15">
          </div>
        </div>
      </div>`
    forecastHTML=forecastHTML + `</div>`;
    forescastElement.innerHTML = forecastHTML;
  }) 
}

function showTemp (response){
  let temperature = document.querySelector("#mainTemperature");
  let description = document.querySelector ("#description");
  let icon = document.querySelector ("#weather-icon");
  let city = document.querySelector ("#city");
  let country=document.querySelector ("#country");
  let windspeed=document.querySelector("#windspeed");
  let humidity = document.querySelector ("#humidity");
  let date =document.querySelector ("#display-day-time");

  celsiustemp=response.data.main.temp;

  temperature.innerHTML = Math.round(celsiustemp);
  description.innerHTML = response.data.weather[0].description;
  city.innerHTML = response.data.name;
  country.innerHTML=response.data.sys.country;
  windspeed.innerHTML=response.data.wind.speed;
  humidity.innerHTML=response.data.main.humidity;
  date.innerHTML= formatdate(response.data.dt*1000);

  icon.setAttribute ("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  
}

function search (city){
  let apiKey= "3ce60030f6a7cefb14f74f4e525a83ac";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp)
}

function showCity (event) {
  event.preventDefault();
  let city = document.querySelector ("#city-input");
  search(city.value);
}

function displayfarhtemp (event){
  event.preventDefault();
  let temperature = document.querySelector ("#mainTemperature")
  let farhtemperature = (celsiustemp*9)/5+32;
  temperature.innerHTML=Math.round(farhtemperature);
}

function displaycelsiustemp (event){
  event.preventDefault();
  let temperature = document.querySelector ("#mainTemperature");
  temperature.innerHTML=Math.round(celsiustemp);
}



let celsiustemp=null;

let form = document.querySelector("#search-form")
form.addEventListener ("submit", showCity)

let farhlink = document.querySelector("#farhtemp");
farhlink.addEventListener("click", displayfarhtemp)

let celsiuslink = document.querySelector("#celsiustemp");
celsiuslink.addEventListener("click", displaycelsiustemp)

search("Porto")


