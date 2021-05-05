const API = require('../src/index');

let getimage = new API();

async function getImage(){
    console.log((await getimage.sfw.hug()).image)
}
getImage();