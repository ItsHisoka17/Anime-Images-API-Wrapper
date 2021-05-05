const request = require('node-superfetch')
const ImageAPIError = require('../errors/Error')

module.exports = async function __request(path){
    return new Promise(async (resolve, reject) => {    
        let baseURL = 'https://anime-api.hisoka17.repl.co/'
        let res = await request.get(`${baseURL}${path}`)
        if (!res.ok || res.status !== 200) reject(new ImageAPIError(`Error ${res.status}: ${res.statusText}`))
        let body = {
            image: res.body.url,
            url: res.url,
            response: res.body
        }
        return resolve(body)
    })
}