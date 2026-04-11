function convertToMinutes(timeStr) {
        let [time, modifier] = timeStr.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        if (modifier === "PM" && hours !== 12) {
            hours += 12;
        }
        if (modifier === "AM" && hours === 12) {
            hours = 0;
        }

        return hours * 60 + minutes;
}

export const calculateDifference = (songTime) =>{
    const formattedTime = new Date().toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit", hour12: true});
    const currentMinutes = convertToMinutes(formattedTime);
    const songMinutes = convertToMinutes(songTime);

    let diff = Math.abs(currentMinutes - songMinutes);

    diff = Math.min(diff, 1440 - diff);

    return diff <= 240; 
}

