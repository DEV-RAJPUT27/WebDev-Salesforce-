let countdownInterval;

function startCountdown() {
    clearInterval(countdownInterval); // Reset if started again

    const input = document.getElementById("datetime").value;
    const targetDate = new Date(input).getTime();

    countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("timer").innerHTML = "Time's up!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }, 1000);
}
