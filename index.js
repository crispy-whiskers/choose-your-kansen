const { createCanvas, loadImage } = require('canvas')
const { AzurAPI } = require("@azurapi/azurapi");
const kansens = require('./assets/data/ships.json')
const assets = "./assets/img"

const fs = require("fs");
const WIDTH = 1920;
const HEIGHT = 1080;
const canvas = createCanvas(WIDTH, HEIGHT); //createimage?

const ctx = canvas.getContext("2d");

const azurlane = new AzurAPI();

let kansen = kansens[156]
const avatarURL = kansen.skins[0].chibi;
console.log(avatarURL);
//exports.run = async (client, message, args, ops) => {


(async () => {
//should use path library here but im lazy af
  let image = await loadImage(assets+"/background1.jpg");
  ctx.drawImage(image, 0, 0);

  let someShip = await loadImage(avatarURL);
  ctx.drawImage(someShip, 200, 200);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./test/image.png", buffer);
})().then(()=>{
  console.log('done')
  sys.exit(0)
});

  


