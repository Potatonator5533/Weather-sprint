let favList = document.getElementById("favList");
let dataHere = document.getElementById("dataHere");

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