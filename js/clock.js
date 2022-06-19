const clock = document.querySelector("h2#clock");




function handleClock(){
    const date = new Date();
    const nowDayNum = date.getDay();
    const Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const Nowday = Days[nowDayNum];
    clock.innerText = date.toLocaleString();
    //clock.innerText = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()} ${Nowday} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}



setInterval(handleClock,1000);