export function formatDate(data) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kolkata", // forces IST
    timeZoneName: "short", // shows IST
  };
  const isoString = data;
  const date = new Date(isoString);

  return date.toLocaleString("en-IN", options);
}
