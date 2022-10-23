function changeTime() {
    let d = new Date();
    time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(changeTime, 1000);