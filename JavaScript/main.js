const setInterval() => 
    Let hours = document.getElementById('hours'); 
    Let minutes = document.getElementById('minutes'); 
    Let seconds = document.getElementById('seconds) 
    Let ampm = document.getElementById('ampm);

Let h = new Date().getHours(); Let m = new Date().getMinutes(); Let S = new Date().getSeconds(); Let am = h >= 12 ? "PM" : "AM";
// convert 24hr clock to 12hr clock if (h > 12){
h = h - 12;
// add zero before single digit number h = (h < 10) ? "" + h : h; m = (m< 10) ? "O" + m: m; S = (s < 10) ? "0" + S: S;
hours.innerHTML = h; minutes.innerHTML = m; seconds.innerHTML = s; ampm.innerHTML = am;