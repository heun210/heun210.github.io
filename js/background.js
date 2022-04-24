//const mainBackGround = document.querySelector(".background-img");
const body = document.querySelector("body");
const img = [
  "1.JPG",
  "2.JPG",
  "3.JPG",
  "4.JPG",
  "5.JPG",
  "6.JPG",
  "7.JPG",
  "8.JPG",
  /* "9.JPG",
  "10.JPG",
  "11.JPG",
  "12.JPG",
  "13.JPG",
  "14.JPG",
  "15.JPG",
  "16.JPG",
  "17.JPG",
  "18.JPG",
  "19.JPG",
  "20.JPG",
  "21.JPG",
  "22.JPG",
  "23.JPG",
  "24.JPG",
  "25.JPG",
  "26.JPG",
  "27.JPG",
  "27.JPG",
  "28.JPG",
  "29.JPG",
  "30.JPG",
  "31.JPG",
  "32.JPG",
  "33.JPG",
  "34.JPG",
  "35.JPG",
  "36.JPG",
  "37.JPG",
  "38.JPG",
  "39.JPG",
  "40.JPG",
  "41.JPG",
  "42.JPG",
  "43.JPG",
  "44.JPG",
  "45.JPG",
  "46.JPG",
  "47.JPG",
  "48.JPG",
  "49.JPG",
  "50.JPG",
  "51.JPG",
  "52.JPG",
  "53.JPG",
  "54.JPG",
  "55.JPG",
  "56.JPG",
  "57.JPG",
  "58.JPG",
  "59.JPG",
  "60.JPG",
  "61.JPG",
  "62.JPG",
  "63.JPG",
  "64.JPG",
  "65.JPG",
  "66.JPG",
  "67.JPG",
  "68.JPG",
  "69.JPG",
  "70.JPG", */
];

const choseImg = img[Math.floor(Math.random() * img.length)];

function paintImage() {
  const bgImage = "bgImage";
  const image = new Image();
  image.src = `/bgimg/${choseImg}`;
  image.classList.add(bgImage);
  body.appendChild(image);
}

paintImage();

/* function init() {
  const randomNumber = choseImg;
  paintImage(randomNumber);
}
init(); */

/* const bgSize = "bg-size";
const bgImg = document.createElement("img");
bgImg.classList.add(bgSize);
quoteContainer.appendChild(bgImg);
bgImg.src = `/images/${choseImg}`; */
