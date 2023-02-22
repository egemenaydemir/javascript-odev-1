let İsim = prompt("Lütfen İsminizi Giriniz")
document.getElementById('myName').innerHTML = İsim

let myClock = document.getElementById('myClock');
function currentTime() 
{
    var today = new Date();
    var second = today.getSeconds(); 
    var minute = today.getMinutes();
    var hours = today.getHours();
    var day = today.getDay();
    var currentDay = ""

    if( day == 0){    currentDay = "Pazar"}
    else if (day == 1){currentDay = "Pazartesi"}
    else if (day == 2){currentDay = "Salı"}
    else if(day == 3){currentDay = "Çarşamba"}
    else if (day == 4){currentDay = "Perşembe"}
    else if (day == 5){currentDay = "Cuma"}
    else if (day == 6){currentDay = "Cumartesi"}
    myClock.innerHTML = `${hours}:${minute}:${second} ${currentDay}`
}
setInterval(currentTime, 1000);