const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const updateClock = () => {
  const now = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString(undefined, options);

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  dateElement.textContent = dateString;
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(updateClock, 1000);
updateClock(); // Call once initially to avoid 1s delay
