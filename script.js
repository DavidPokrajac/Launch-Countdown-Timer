document.addEventListener("DOMContentLoaded", () => {

    let daysField = document.querySelector(".days");
    let hoursField = document.querySelector(".hours");
    let minutesField = document.querySelector(".minutes");
    let secondsField = document.querySelector(".seconds");
    
    let currentDate = new Date();
    let someDate = new Date('November 1, 2022, 14:00:00');

    let diffInMilliSeconds = Math.abs(someDate - currentDate) / 1000;

    let days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    daysField.innerText = days < 10 ? `0${days - 1}` : days - 1;

    let hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    hoursField.innerText = hours < 10 ? `0${hours}` : hours;

    let minutes = Math.floor(diffInMilliSeconds / 60);
    diffInMilliSeconds -= minutes * 60;
    minutesField.innerText = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = Math.floor(diffInMilliSeconds);
    diffInMilliSeconds -= seconds * 60;
    secondsField.innerText = minutes < 10 ? `0${seconds}` : seconds;

    setInterval(() => {
        seconds -= 1;
        secondsField.innerText = seconds < 10 ? `0${seconds}` : seconds;
        if(seconds === 0) {
            seconds = 60;
        }
        if(seconds === 59) {
            minutes -= 1;
            minutesField.innerText = minutes < 10 ? `0${minutes}` : minutes;
        }
        if(seconds === 0 && minutes === 0) {
            minutes = 59;
            minutesField.innerText = minutes < 10 ? `0${minutes}` : minutes;
            hours -= 1;
            hoursField.innerText = hours < 10 ? `0${hours}` : hours;
        }
        if(hours === 0 && minutes === 0 && seconds === 0) {
            hours = 23;
            days -= 1;
            daysField.innerText = days < 10 ? `0${days}` : days;
        }
    }, 1000)

});