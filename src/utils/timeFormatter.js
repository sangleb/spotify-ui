import formatDuration from "format-duration";
export default function formatTime(timeInSeconds = 0){
    return formatDuration(timeInSeconds * 1000);
}