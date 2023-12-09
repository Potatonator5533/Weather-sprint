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
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
let day4 = document.getElementById("day4");
let day5 = document.getElementById("day5");
let day6 = document.getElementById("day6");
let day7 = document.getElementById("day7");
let fav = document.getElementById("fav");
let cityText1 = document.getElementById("cityText1");
let cityText2 = document.getElementById("cityText2");
let cityText3 = document.getElementById("cityText3");
let cityText4 = document.getElementById("cityText4");
let cityText5 = document.getElementById("cityText5");
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
let iconText1 = document.getElementById("iconText1");
let iconText2 = document.getElementById("iconText2");
let iconText3 = document.getElementById("iconText3");
let iconText4 = document.getElementById("iconText4");
let iconText5 = document.getElementById("iconText5");
let iconText6 = document.getElementById("iconText6");
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let icon5 = document.getElementById("icon5");
let icon6 = document.getElementById("icon6");
let userCity = document.getElementById("userCity");
let submitBtn = document.getElementById("submitBtn");

// let homePage = true;

// if (homePage === true) {
//     //LoadHomePage();
// } else {
//     //LoadFavsPage();
// }

LoadHomePage();

async function LoadHomePage() {
    const promise1 = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a');
    const data1 = await promise1.json();
    console.log(data1);

    const promise2 = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a');
    const data2 = await promise2.json();
    console.log(data2);

    /* City Name */
    cityText1.innerText = data1.name;
    cityText2.innerText = data1.name;

    /* Current Temperature */
    tempNow1.innerText = TempConverter(data1.main.temp) + "°";

    /* Highest Temperature */
    tempHigh1.innerText = TempConverter(data1.main.temp_max) + "°";
    tempHigh2.innerText = "Hi " + TempConverter(data2.list[0].main.temp_max) + "°";
    tempHigh3.innerText = "Hi " + TempConverter(data2.list[1].main.temp_max) + "°";
    tempHigh4.innerText = "Hi " + TempConverter(data2.list[2].main.temp_max) + "°";
    tempHigh5.innerText = "Hi " + TempConverter(data2.list[3].main.temp_max) + "°";
    tempHigh6.innerText = "Hi " + TempConverter(data2.list[4].main.temp_max) + "°";

    /* Lowest temperature */
    tempLow1.innerText = TempConverter(data1.main.temp_min) + "°";
    tempLow2.innerText = "Low " + TempConverter(data2.list[0].main.temp_min) + "°";
    tempLow3.innerText = "Low " + TempConverter(data2.list[1].main.temp_min) + "°";
    tempLow4.innerText = "Low " + TempConverter(data2.list[2].main.temp_min) + "°";
    tempLow5.innerText = "Low " + TempConverter(data2.list[3].main.temp_min) + "°";
    tempLow6.innerText = "Low " + TempConverter(data2.list[4].main.temp_min) + "°";

    /* Icon's Text Description */
    iconText1.innerText = data1.weather[0].main;
    iconText2.innerText = data2.list[0].weather[0].main;
    iconText3.innerText = data2.list[1].weather[0].main;
    iconText4.innerText = data2.list[2].weather[0].main;
    iconText5.innerText = data2.list[3].weather[0].main;
    iconText6.innerText = data2.list[4].weather[0].main;

    /* Icon Image */
    icon1 = getIconType(data1.weather[0].icon);
    icon2 = getIconType(data2.list[0].weather[0].icon);
    icon3 = getIconType(data2.list[1].weather[0].icon);
    icon4 = getIconType(data2.list[2].weather[0].icon);
    icon5 = getIconType(data2.list[3].weather[0].icon);
    icon6 = getIconType(data2.list[4].weather[0].icon);    

    /* Days */
    // day1.innerText = 
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
    return Math.floor((((kelvin - 273.15) * 9) / 5) + 32)
}

function getIconType(iconType) {
    if (iconType === "01d") {
        // return URL("../assets/Sunny.png");
    }
    if (iconType === "01n") {
        // return URL("");
    }
    if (iconType === "02d") {
        // return URL("");
    }
    if (iconType === "02n") {
        // return URL("");
    }
    if (iconType === "03d") {
        // return URL("");
    }
    if (iconType === "03n") {
        // return URL("");
    }
    if (iconType === "04d") {
        // return URL("");
    }
    if (iconType === "04n") {
        // return URL("");
    }
    if (iconType === "09d") {
        // return URL("");
    }
    if (iconType === "09n") {
        // return URL("");
    }
    if (iconType === "10d") {
        // return URL("");
    }
    if (iconType === "10n") {
        // return URL("");
    }
    if (iconType === "11d") {
        // return URL("");
    }
    if (iconType === "11n") {
        // return URL("");
    }
    if (iconType === "13d") {
        // return URL("");
    }
    if (iconType === "13n") {
        // return URL("");
    }
    if (iconType === "50d") {
        // return URL("");
    }
    if (iconType === "50n") {
        // return URL("");
    }
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