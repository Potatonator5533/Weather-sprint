let favList = document.getElementById("favList");
let home = document.getElementById("home");
// let dataHere = document.getElementById("dataHere");
let day = document.getElementById("day");
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
let userCity = document.getElementById("userCity");
let submitBtn = document.getElementById("submitBtn");

let iconType;
let iconIs;

test();

function test() {
        /* City Name */
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => console.log(data)
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        // data => console.log(data)
        data => cityText1.innerText = data.name
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => cityText2.innerText = data.name
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => cityText3.innerText = data.name
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => cityText4.innerText = data.name
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => cityText5.innerText = data.name
    )

        /* Current Temperature */
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempNow1.innerText = data.main.temp
    )
    /*fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempNow2.innerText = data.main.temp
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempNow3.innerText = data.main.temp
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempNow4.innerText = data.main.temp
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempNow5.innerText = data.main.temp
    )*/

        /* Hignest Temperature */
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempHigh1.innerText = data.main.temp_max
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempHigh2.innerText = data.main.temp_max
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempHigh3.innerText = data.main.temp_max
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempHigh4.innerText = data.main.temp_max
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempHigh5.innerText = data.main.temp_max
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempHigh6.innerText = data.main.temp_max
    )
    
        /* Lowest temperature */
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempLow1.innerText = data.main.temp_min
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempLow2.innerText = data.main.temp_min
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempLow3.innerText = data.main.temp_min
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempLow4.innerText = data.main.temp_min
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempLow5.innerText = data.main.temp_min
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => tempLow6.innerText = data.main.temp_min
    )

        /* Icon's Text Description */
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => iconText1.innerText = data.weather[0].main
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => iconText2.innerText = data.weather[0].main
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => iconText3.innerText = data.weather[0].main
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => iconText4.innerText = data.weather[0].main
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => iconText5.innerText = data.weather[0].main
    )
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a').then(
        response => response.json()
    ).then(
        data => iconText6.innerText = data.weather[0].main
    )

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