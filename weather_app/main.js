const apiKey = "63b3b7d7d60a412f2b66e227b703e6df";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const cityName = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


    async function checkweather(city) {

        const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

        if(response.status === 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".details").style.display = "none";
           
        }
        else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".details").style.display = "flex";
        
        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';
        document.querySelector(".weather img").src = `images/${data.weather[0].main}.png`;
    }
   
}
// Load default city when page loads
    checkweather("New Delhi");
    
    
searchBtn.addEventListener("click", () => {
        checkweather(cityName.value);
})
cityName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkweather(cityName.value);
    }
});


    

