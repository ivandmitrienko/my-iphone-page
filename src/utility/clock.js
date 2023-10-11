setInterval(function () {
    var now = new Date();
    var clock = document.querySelector(".iphone-status-bar__time");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);