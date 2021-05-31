# Anime-Images-API Javascript Wrapper

### About:
This ia a Javascript Wrapper For [Anime-Images-Api](https://anime-api.hisoka17.repl.co/)

About The API:

Anime-Images API is a powerful Rest API built with Node.JS

> 1000+ Images

> 10+ Endpoints. With more being Added

> Lightning fast responses


### Basic Usage:
```js
const Anime_Images = require('anime-images-api')
const API = new Anime_Images()
async function getIMG(){
    let { image } = await API.sfw.hug()
    console.log(image)
}
getIMG()
//Or get an NSFW Image:
getNSFWImg()
async function getNSFWImg(){
    let { image } = await API.nsfw.hentai()
    console.log(image)
}
```
Output:
```
https://anime-api.hisoka17.repl.co/images/hug80.gif
```
### Endpoint Methods:
`API.sfw`:

| Endpoint | Description         |
|----------|---------------------|
| hug()    | Sends a hug Gif     |
| kiss()   | Sends a kiss Gif    |
| slap()   | Sends a slap Gif    |
| punch()  | Sends a punch Gif   |
| wink()   | Sends a winking Gif |
| pat()    | Sends a pat Gif     |
| kill()   | Sends a kill Gif    |
| cuddle() | Sends a cuddle Gif  |
| wafiu()  | Sends a waifu       |

`API.nsfw`:

| Endpoint | Description         |
|----------|---------------------|
| hentai() | Sends a hentai Gif  |
| boobs()  | Sends a boob Gif    |
| lesbian()| Sends a lesbian Gif |




### Download the image:
```js
const Anime_Images = require('anime-images-api')
const API = new Anime_Images()

(async () => {
    let image = await API.sfw.hug();
    image.download('images', 'hugging') //Path, Filename
    .then(() => console.log('Finished Downloading'))
})()
```
### Discord Bot example:
```js
const Discord = require('discord.js');
const client = new Discord.Client()
const API = require('anime-images-api')
const images_api = new API() 

client.on('message', function(m){
    if (m.content.startsWith('image')){
        images_api.sfw.hug().then(response => {
            m.channel.send(response.image)
        }) 
    }
})
```




