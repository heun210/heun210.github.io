const time = document.querySelector(".time");

function getTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const stringMonth = months[month];
  const date = now.getDate();
  const day = now.getDay();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const stringDay = days[day];
  const hours = String(now.getHours()).padStart();
  const min = String(now.getMinutes()).padStart();
  const sec = String(now.getSeconds()).padStart();
  time.innerText = `${year} ${stringMonth} ${date} ${stringDay} ${hours}시 ${min}분 ${sec}초`;
}

getTime();
setInterval(getTime, 1000);

/* const year = String(date.getFullYear()).padStart();
const month = String(date.getMonth()).padStart();
const day = String(date.getDate()).padStart(); */
