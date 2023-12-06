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


submitBtn.addEventListener('click', function (e) {
    findCity(userCity);
});

function findCity(userCity) {
    fetch(`https://api.api-ninjas.com/v1/city?name=${userCity}`).then(
        response => response.json()
    ).then(
        data => cityText.innerText = data.name
    )
}



// function GetData() {
//     fetch("https://randomuser.me/api/").then(
//         response => response.json()
//     ).then(
//         // data => console.log(data)
//         data => cityText.innerText = data.results.location 
//     )
// };

// GetData();