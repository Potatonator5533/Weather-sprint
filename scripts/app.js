let favList = document.getElementById("favList");
let home = document.getElementById("home");
// let dataHere = document.getElementById("dataHere");
let day = document.getElementById("day");
let cityText = document.getElementById("cityText");
let fav = document.getElementById("fav");
let temp = document.getElementById("temp");
let icon = document.getElementById("icon");
let iconText = document.getElementById("iconText");
let userCity = document.getElementById("userCity");
let submitBtn = document.getElementById("submitBtn");


test();

function test() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        // data => console.log(data)
        data => cityText.innerText = data.name 
    )
}

// submitBtn.addEventListener('click', function (e) {
//     findCity(userCity);
// });

// findCity("San Fransisco");

// function findCity(userCity) {
//     fetch(`https://api.api-ninjas.com/v1/city?name=${userCity}`).then(
//         response => response.json()
//     ).then(
//         data => console.log(data)
//         // data => cityText.innerText = data.name
//     )
// }



// function GetData() {
//     fetch("https://randomuser.me/api/").then(
//         response => response.json()
//     ).then(
//         // data => console.log(data)
//         data => cityText.innerText = data.results.location 
//     )
// };

// GetData();