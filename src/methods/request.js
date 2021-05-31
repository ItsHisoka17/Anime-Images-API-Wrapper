const request = require('node-superfetch')
const downloadFile = require('./download')
const ImageAPIError = require('../errors/Error')

module.exports = async function __request(path){
    return new Promise(async (resolve, reject) => {    
        let baseURL = 'https://anime-api.hisoka17.repl.co/'
        let res = await request.get(`${baseURL}${path}`)
        if (!res.ok || res.status !== 200) reject(new ImageAPIError(`Error ${res.status}: ${res.statusText}`))
        let body = {
            image: res.body.url,
            url: res.url,
            response: res.body,
            /**
             * 
             * @param {string} path 
             * @param {string} name
             * @returns {Promise<void>} 
             */
            download: async (path, name) => {
                downloadFile(res.body.url, path, `${name}.${res.body.url.split('.').pop()}`)
            }
        }
        return resolve(body)
    })
}