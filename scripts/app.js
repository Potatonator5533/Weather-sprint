navigator.geolocation.getCurrentPosition(success, errorFunc);

{
    coords: {
        latitude: 38.5810606
        longitude: -121.493895
    }
}

//if the user accepts
function success(position) {
    console.log("Our latitude: " + position.coords.latitude);
    console.log("Our longitude: " + position.coords.longitude);
}

//if the user denies
function errorFunc(error) {
    console.log(error.message);
}

let favList = document.getElementById("favList");
let home = document.getElementById("home");
// let dataHere = document.getElementById("dataHere");
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
let day4 = document.getElementById("day4");
let day5 = document.getElementById("day5");
let day6 = document.getElementById("day6");
let day7 = document.getElementById("day7");
let cityText1 = document.getElementById("cityText1");
let cityText2 = document.getElementById("cityText2");
let cityText3 = document.getElementById("cityText3");
let cityText4 = document.getElementById("cityText4");
let cityText5 = document.getElementById("cityText5");
let fav = document.getElementById("fav");
let tempNow1 = document.getElementById("tempNow1");
let tempNow2 = document.getElementById("tempNow2");
let tempNow3 = document.getElementById("tempNow3");
let tempNow4 = document.getElementById("tempNow4");
let tempNow5 = document.getElementById("tempNow5");
let tempHigh1 = document.getElementById("tempHigh1");
let tempHigh2 = document.getElementById("tempHigh2");
let tempHigh3 = document.getElementById("tempHigh3");
let tempHigh4 = document.getElementById("tempHigh4");
let tempHigh5 = document.getElementById("tempHigh5");
let tempHigh6 = document.getElementById("tempHigh6");
let tempLow1 = document.getElementById("tempLow1");
let tempLow2 = document.getElementById("tempLow2");
let tempLow3 = document.getElementById("tempLow3");
let tempLow4 = document.getElementById("tempLow4");
let tempLow5 = document.getElementById("tempLow5");
let tempLow6 = document.getElementById("tempLow6");
let icon = document.getElementById("icon");
let iconText1 = document.getElementById("iconText1");
let iconText2 = document.getElementById("iconText2");
let iconText3 = document.getElementById("iconText3");
let iconText4 = document.getElementById("iconText4");
let iconText5 = document.getElementById("iconText5");
let iconText6 = document.getElementById("iconText6");
let userCity = document.getElementById("userCity");
let submitBtn = document.getElementById("submitBtn");

let iconType;
let iconIs;
let kelvin;

LoadPage();

async function LoadPage() {
    const promise1 = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a');
    const data1 = await promise1.json();
    console.log(data1);

    const promise2 = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a');
    const data2 = await promise2.json();
    console.log(data2);


        /* City Name */
    cityText1.innerText = data1.name
    cityText2.innerText = data1.name
    // cityText3.innerText = data1.name
    // cityText4.innerText = data1.name
    // cityText5.innerText = data1.name


        /* Current Temperature */
    tempNow1.innerText = data1.main.temp

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.main.temp
    ).then(
        // TempConverter(data)
    )/*.then(
        tempNow1.innerText = kelvin
    )*/

        /* Hignest Temperature */
    

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.main.temp_max
    ).then(
        TempConverter(kelvin)
    )
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.list[0].main.temp_max
    ).then(
        TempConverter(kelvin)
    )
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.list[1].main.temp_max
    ).then(
        TempConverter(kelvin)
    )
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.list[2].main.temp_max
    ).then(
        TempConverter(kelvin)
    )
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.list[3].main.temp_max
    ).then(
        TempConverter(kelvin)
    )
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.list[4].main.temp_max
    ).then(
        TempConverter(kelvin)
    )
    
        /* Lowest temperature */
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.main.temp_min
    ).then(
        TempConverter(kelvin)
    )
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.list[0].main.temp_min
    ).then(
        TempConverter(kelvin)
    )
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.list[1].main.temp_min
    ).then(
        TempConverter(kelvin)
    )
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.list[2].main.temp_min
    ).then(
        TempConverter(kelvin)
    )
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.list[3].main.temp_min
    ).then(
        TempConverter(kelvin)
    )
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => kelvin = data.list[4].main.temp_min
    ).then(
        TempConverter(kelvin)
    )

        /* Icon's Text Description */
    iconText1.innerText = data1.weather[0].main
    iconText2.innerText = data2.list[0].weather[0].main
    iconText3.innerText = data2.list[0].weather[0].main
    iconText4.innerText = data2.list[0].weather[0].main
    iconText5.innerText = data2.list[0].weather[0].main
    iconText6.innerText = data2.list[0].weather[0].main

        /* Icon Image */
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => iconType = data.weather[0].icon
    ).then(
        // getIconType(iconType)
    )
    /*fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => iconType = data.weather[0].icon
    ).then(
        getIconType(iconType)
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => iconType = data.weather[0].icon
    ).then(
        getIconType(iconType)
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => iconType = data.weather[0].icon
    ).then(
        getIconType(iconType)
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => iconType = data.weather[0].icon
    ).then(
        getIconType(iconType)
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => iconType = data.weather[0].icon
    ).then(
        getIconType(iconType)
    )*/

        /* Days */
    /*fetch('https://timeapi.io/api/Time/current/coordinate?latitude=38.5810606&longitude=-121.493895').then(
        response => response.json()
    ).then(
        data => day1.innerText = data.dayOfWeek
    )
    fetch('https://timeapi.io/api/Time/current/coordinate?latitude=38.5810606&longitude=-121.493895').then(
        response => response.json()
    ).then(
        data => day2.innerText = data.calculationResult.date
    )
    fetch('https://timeapi.io/api/Time/current/coordinate?latitude=38.5810606&longitude=-121.493895').then(
        response => response.json()
    ).then(
        data => day3.innerText = data.calculationResult.date
    )
    fetch('https://timeapi.io/api/Time/current/coordinate?latitude=38.5810606&longitude=-121.493895').then(
        response => response.json()
    ).then(
        data => day4.innerText = data.calculationResult.date
    )
    fetch('https://timeapi.io/api/Time/current/coordinate?latitude=38.5810606&longitude=-121.493895').then(
        response => response.json()
    ).then(
        data => day5.innerText = data.calculationResult.date
    )
    fetch('https://timeapi.io/api/Time/current/coordinate?latitude=38.5810606&longitude=-121.493895').then(
        response => response.json()
    ).then(
        data => day6.innerText = data.calculationResult.date
    )*/

    
}

function TempConverter(kelvin) {
    console.log(Math.floor((((kelvin - 273.15) * 9) / 5) + 32))
}

/*function getIconType(iconType) {
    if (iconType === "01d"){
        iconIs = 
    }
}*/

/*const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}*/

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