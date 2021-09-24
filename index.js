~function () {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let cee = "Jan 22, 2022 00:00:00",
    countDown = new Date(cee).getTime(),
    x = setInterval(function () {
        let now = new Date().getTime(),
        delta = countDown - now;

        document.getElementById("days").innerText = Math.floor(delta / (day)) < 10 ? "0" + Math.floor(delta / (day)):Math.floor(delta / (day));
        document.getElementById("hours").innerText = Math.floor((delta % (day)) / (hour)) < 10 ? "0" + Math.floor((delta % (day)) / (hour)) : Math.floor((delta % (day)) / (hour)) ;
        document.getElementById("minutes").innerText = Math.floor((delta % (hour)) / (minute)) < 10 ? "0" + Math.floor((delta % (hour)) / (minute)) : Math.floor((delta % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((delta % (minute)) / second) < 10 ? "0" + Math.floor((delta % (minute)) / second) : Math.floor((delta % (minute)) / second);

        if (delta < 0) {
            let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");

            countdown.style.display = "none";
            content.style.display = "block";

            clearInterval(x);
        }
    }, 0)
}();