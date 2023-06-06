let hr=document.getElementById('hour');
let m=document.getElementById('min');
let s=document.getElementById('sec');
function displayTime(){
    let date = new Date(); //getting hours,mins,secs from date 
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let hrotation=30*hh+mm/2;
    let mrotation=6*mm;
    let srotation=6*ss;
    hr.style.transform=`rotate(${hrotation}deg)`;
    s.style.transform=`rotate(${srotation}deg)`;
    m.style.transform=`rotate(${mrotation}deg)`;
}

setInterval(displayTime,1000);