const endDate= "30 September 2023 00:00";
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let rmonth;
switch(month)
{
 case 1:
        rmonth="January";
        break;
 case 2:
        rmonth="February";
        break;
 case 3:
        rmonth="March";
        break;
 case 4:
        rmonth="April";
        break;
 case 5:
        rmonth="May";
        break;
 case 6:
        rmonth="June";
        break;
 case 7:
        rmonth="July";
        break;
 case 8:
        rmonth="August";
        break;
 case 9:
        rmonth="September";
        break;
 case 10:
        rmonth="October";
        break;
 case 11:
        rmonth="November";
        break;
 case 12:
        rmonth="December";
        break;

}
let fulldate= `from today... ${day}-${rmonth}-${year}`;
document.getElementById("end-date").innerText=fulldate;


function showCountdown(){

const end= new Date(endDate);
const now= new Date();
const diff = end- now;

const realRemDays=diff/3600000/24;
const days= Math.floor(realRemDays);
const realRemHours=24*(realRemDays-days);
const hourss= Math.floor(realRemHours);
const realRemMin= 60*(realRemHours-hourss);
const mins= Math.floor(realRemMin);
const realRemSec= 60*(realRemMin-mins);
const sec= Math.floor((realRemSec));


// const hourss= Math.floor(24*(realRemDays-days))
console.log(days)
console.log(hourss)
console.log(mins)
console.log(sec)
// document.write(days)
// document.write(hourss)

const inputs= document.querySelectorAll("input");

inputs[0].value=days;
inputs[1].value=hourss;
inputs[2].value=mins;
inputs[3].value=sec;
// document.getElementById("days").value=days;
// document.getElementById("hours").value=hourss
// document.getElementById("minutes").value=mins
// document.getElementById("scd").value=sec
// console.log(document.getElementById("days"))
}

showCountdown();

setInterval(
    ()=>{
        showCountdown();
    },1000
)
// }



