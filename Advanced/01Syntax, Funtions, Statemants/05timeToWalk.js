function walk(stepsToUniversity, footprintLength, speedKm) {
    let distance = (footprintLength * stepsToUniversity);   // in meters
    let rest = Math.floor(distance / 500) * 60;  // in seconds
    let speed = (speedKm * 1000) / 3600;
    let time = distance / speed + rest;

    const hours = Math.floor(time / 60 / 60).toFixed(0).padStart(2, "0");
    const minutes = Math.floor((time / 60)).toFixed(0).padStart(2, "0");
    const seconds = ((time % 60)).toFixed(0).padStart(2, "0");



    console.log(`${hours}:${minutes}:${seconds}`)
}

walk(4000, 0.60, 5)
walk(2564, 0.70, 5.5)