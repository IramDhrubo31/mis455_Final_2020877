function connect(){
    var searchTerm = document.getElementById("countryName").value;
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=fd65df3fd56ce45fd9b36820ef734946`;
   
    fetch (url)
    .then (res => res.json())
    .then (data => display(data))
}