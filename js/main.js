const API_KEY = "569a997819d8d08fffa8712b7162c34b"
const ENDPOINT = "http://api.openweathermap.org/data/2.5/weather"

const zipCodeInput = document.querySelector('#zip');
const cityParagraph = document.querySelector('#city')
const weatherForm = document.querySelector('#get-weather-form')
const weatherDescription = document.querySelector('#weather-descripition')


function getWeatherData(){
    
axios
.get(`${ENDPOINT}?appid=${API_KEY}&zip=${zipCodeInput.value}`)
.then(function(response) {
    console.log(response)
    cityParagraph.textContent = response.data.name
    weatherDescription.textContent = response.data.weather[0].description

})
}
getWeatherData()


weatherForm.addEventListener('submit', function(e) {
    e.preventDefault()
   getWeatherData()
})







