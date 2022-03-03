const { createCanvas, loadImage } = require('canvas')
const fs = require("fs");
const WIDTH = 1920;
const HEIGHT = 1080;
const canvas = createCanvas(WIDTH, HEIGHT); //createimage?

const ctx = canvas.getContext("2d");


loadImage("./assets/img/background1.jpg").then((image) => {
    ctx.drawImage(image, 0, 0);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./image.png", buffer);
  });
  

