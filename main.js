let time_hours = 2; // Value in hours
let time_minutes = 0; // Value in minutes
let time_seconds = 25; // Value in seconds

let getSeconds = time_hours * 3600 + time_minutes * 60 + time_seconds;

function convertSeconds(totalSeconds) {
    // Countdown Timer
    var tMinusRecurring = setInterval(function () {
        var tMinus_hour = Math.floor(totalSeconds / 3600)
        var tMinus_minute = Math.floor(totalSeconds % 3600 / 60);
        var tMinus_seconds = totalSeconds % 60;

        document.getElementById("tminus").innerHTML = 'T - ' + tMinus_hour.toString().padStart(2, '0') + ' : ' + tMinus_minute.toString().padStart(2, '0') + ' : ' + tMinus_seconds.toString().padStart(2, '0');
        
        totalSeconds = totalSeconds - 1;
        
        if (totalSeconds < 0) {
            // clearing the tMinusRecurring setInterval and continue Countup Timer
            clearInterval(tMinusRecurring);
            // Countup Timer
            var hour = 0, minute = 0, seconds = 0;
            function time() {
                seconds++;
                if (seconds >= 60) {
                    seconds = 0;
                    minute++;
                    if (minute >= 60) {
                        minutes = 0;
                        hour++;
                    }
                }
                document.getElementById("tminus").innerHTML = "T + " + hour.toString().padStart(2, '0') + " : " + minute.toString().padStart(2, '0') + " : " + seconds.toString().padStart(2, '0');
            }
            setInterval(time, 1000);
        }
    }, 1000);
}

convertSeconds(getSeconds);