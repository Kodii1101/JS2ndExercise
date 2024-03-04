//challenge question from Mr. Charlie Yabes
/* Help me to answer. 😭
As a future athlete you just started your practice for an upcoming event. Given that on the first day you run x miles, and by the event you must be able to run y miles.
Calculate the number of days required for you to finally reach the required distance for the event, if you increases your distance each day by 10% from the previous day.
Print one integer representing the number of days to reach the required distance. */

function checkThisss(startDayKM, eventRequiredKM) {
    let x = startDayKM; //5
    let y = eventRequiredKM; //20
    const iR = 0.1;
    let daysFinished = 0;
    let kmFinished = 0;
    let kmExcess = 0;
    let currentValue = 0;

    if (x >= y) {
        return "You already ran what is required. You pass!";
    } else {
        if (x <= 0) {
            return "You haven't moved an inch!";
        } else {
            if (y <= 0) {
                return "How much running do you need? please specify";
            } else {
                while (kmFinished < y) {
                    kmFinished = kmFinished + x;
                    currentValue = x;
                    x = x + x * iR;
                    daysFinished++;
                    kmExcess = kmFinished - y;
                }
                /* console.log(x);
                console.log(kmFinished);
                console.log(currentValue);
                console.log(kmExcess);
                for (j = 0; j <= 5; j++) {
                    console.log((x = x + x * iR));
                } */
                if (kmExcess >= 7) {
                    daysFinished--;
                    kmExcess = y - (kmFinished - currentValue);
                    kmFinished = kmFinished - currentValue;
                    return `You will finish in approx ${daysFinished} day/s and run ${kmFinished.toPrecision(
                        4
                    )} km/s with a short of ${kmExcess.toPrecision(
                        3
                    )} kilometer/s`;
                } else {
                    return `You will finish in approx ${daysFinished} day/s and run ${kmFinished.toPrecision(
                        4
                    )} km/s with an excess of ${kmExcess.toPrecision(
                        3
                    )} kilometer/s`;
                }
            }
        }
    }
} //function end

console.log(checkThisss(10, 30));
