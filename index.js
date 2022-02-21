const { createCanvas, loadImage } = require('canvas')
const fs = require("fs");
const WIDTH = 1275;
const HEIGHT = 638;
const canvas = createCanvas(WIDTH, HEIGHT); //createimage?

const ctx = canvas.getContext("2d");


loadImage("./assets/img/background.png").then((image) => {
    ctx.drawImage(image, 0, 0);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./image.png", buffer);
  });
  

