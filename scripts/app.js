let favList = document.getElementById("favList");
let home = document.getElementById("home");
let dataHere = document.getElementById("dataHere");
let day = document.getElementById("day");
let city = document.getElementById("city");
let fav = document.getElementById("fav");
let temp = document.getElementById("temp");
let icon = document.getElementById("icon");
let iconText = document.getElementById("iconText");


favList.addEventListener('click', function (e) {
    GetData();
});

function GetData() {
    fetch("https://api.adviceslip.com/advice").then(
        response => response.json()
    ).then(
        // data => console.log(data)
        data => dataHere.innerText = data.slip.advice   
    )
};