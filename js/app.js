var search = document.getElementById("search");

search.addEventListener("keyup", e => {
  if (e.keyCode == 13) {
    //keycode of enter key is 13. onli if enter is pressed ,results is shown
    var searchText = e.target.value;
  }

  getWeather(searchText);
});

function getWeather(searchText) {
  const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${searchText}&&mode=json&units=metric&APPID=1633b017c2e058e526e25d35d9917e24`;
  window
    .fetch(weatherApi)
    .then(data => {
      data
        .json()
        .then(weather => {
          //   console.log(weather.coord.lon);
          //   console.log(weather.coord.lat);

          //array here
          var output = [];
          var weatherData = weather.weather;
          for (let x of weatherData) {
            // console.log(x);
            // console.log(x.id);
            // console.log(x.main);
            // console.log(x.description);
            // console.log(x.icon);
            var output = `
            <div class="col-md-4 offset-4 mt-4 card">
               <h1>${searchText}</h1>
               
               <span class="icon">
                    <img src="http://openweathermap.org/img/wn/${x.icon}.png"/>    
                </span>
                
               <p><span>Temp :</span>
                    <span class="temp">${weather.main.temp}&deg;c</span></p>
                <span class="des float-left">${x.description}</span> 
                <span class="main float-right">${x.main}</span> 
               
            </div>`;
            document.getElementById("template").innerHTML = output;
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
