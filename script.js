// let count = 0;
// let interval;


// let timer = () => {
//     count++
//     console.log("count")
// }
// // 1second = 1000ms
// interval = setInterval(timer,1000);

// let timeout = () => {
//     clearInterval(interval)
// }

// setTimeout(timeout,5000)

let min = 0;
let sec = 0;
let msec = 0;
var minHeading = document.querySelector("#min");
var secHeading = document.querySelector("#sec");
var msecHeading = document.querySelector("#msec");
var interval;

let timer = () => {
    msec++
    msecHeading.innerHTML = msec;
    if(msec == 100){
        sec++
        secHeading.innerHTML = sec;  
        msec= 0;
    } else if(sec ==60){
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
 }
 let start = () =>{
    interval = setInterval(timer,10);
    var startBtn =document.getElementById("startBtn");
    startBtn.disabled = true
 }
 let stop = () => {
    clearInterval(interval)
    var startBtn =document.getElementById("startBtn");
    startBtn.disabled = false
 }

 let restart = () => {
    min = 0
    sec = 0
    msec = 0
    minHeading.innerHTML = min
    secHeading.innerHTM = sec
    msecHeading.innerHTM = msec
    var startBtn =document.getElementById("startBtn");
    startBtn.disabled = false

 }


