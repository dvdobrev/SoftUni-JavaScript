function roadRadar(currentSpeed, area){
    let speedLimit = 0;
    let status = undefined;
    let difference = 0;

    switch (area) {
        case "motorway":
            speedLimit = 130;
            break;

        case "interstate":
            speedLimit = 90;
            break;

        case "city":
            speedLimit = 50;
            break;
        
        case "residential":
            speedLimit = 20;
            break;

    }
    if (speedLimit < currentSpeed){
        difference = currentSpeed - speedLimit;
    }

    if (difference <= 20){
        status = "speeding";
    } else if (difference <= 40){
        status = "excessive speeding";

    } else {
        status = "reckless driving"
    }

    if (difference === 0) {
        console.log( `Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }

}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')