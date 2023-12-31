function connect(){
    var searchTerm = document.getElementById("searchBox").value;
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=fd65df3fd56ce45fd9b36820ef734946`;
   
    fetch (url)
    .then (res => res.json())
    .then (data => display(data))
}

function display (data){
    var weatherList = data.list;
    var oldContent = document.getElementById("container");
    oldContent.textContent = "";

    for (var i=0; i<weatherList.length; i=i+8){
        var newDiv = document.createElement("div");
        var date_time = weatherList[i].dt_txt;
        var dateInYMD = date_time.substr(0 , 10);
        var dateParts = dateInYMD.split("-");
        var date = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
        var time = date_time.substr(12 , 20);
        newDiv.innerHTML = `
                <b>Date: </b>${date}<br>
                <b>Time: </b>${time}<br><br>
                <b>Temperature: </b>${weatherList[i].main.temp} &degC<br>
                <b>Feels Like: </b>${weatherList[i].main.feels_like} &degC<br><br>
                <b>Min Temperature: </b>${weatherList[i].main.temp_min} &degC<br>
                <b>Max Temperature: </b>${weatherList[i].main.temp_max} &degC<br><br>
                <b>Humidity: </b>${weatherList[i].main.humidity} %<br>
                <b>Wind Speed: </b>${weatherList[i].wind.speed} m/s<br><br>
                <b>Weather: </b>${weatherList[i].weather[0].description}<br><img src="https://openweathermap.org/img/wn/${weatherList[i].weather[0].icon}@2x.png" alt="Weather Icon">
        `

        newDiv.classList.add("weatherStyle");
        oldContent.appendChild(newDiv);
    }
}