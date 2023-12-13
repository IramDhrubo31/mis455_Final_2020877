function connect(){
    var searchTerm = document.getElementById("countryName").value;
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=fd65df3fd56ce45fd9b36820ef734946`;
   
    fetch (url)
    .then (res => res.json())
    .then (data => display(data))
}

function display (data){
    var weatherList = data.list;
    var oldContent = document.getElementById("container");
    oldContent.textContent = "";

    for (var i=0; i<5; i++){
        var newDiv = document.createElement("div");
        var date_time = weatherList[i].dt_txt;
        var date = date_time.substr(0 , 10);
        var time = date_time.substr(12 , 20);
        newDiv.innerHTML = `
            <b>Date: </b>${date}<br>
            <b>Time: </b>${time}<br>
            <b>Temperature: </b>${weatherList[i].main.temp}<br>
            <b>Feels Like: </b>${weatherList[i].main.feels_like}<br>
            <b>Min Temperature: </b>${weatherList[i].main.temp_min}<br>
            <b>Max Temperature: </b>${weatherList[i].main.temp_max}<br>
            <b>Humidity: </b>${weatherList[i].main.humidity}<br>
            <b>Wind Speed: </b>${weatherList[i].wind.speed}<br>
            <b>Weather Description</b>${weatherList[i].weather[0].description}<br>
        `

        newDiv.classList.add("weatherStyle");
        oldContent.appendChild(newDiv);
    }
}