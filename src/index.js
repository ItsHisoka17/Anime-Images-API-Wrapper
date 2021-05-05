const __request = require('./methods/request')
const download = require('./methods/download')
const endpoints = require('./endpoints.json')
class GetImages {

    constructor(){
        let type = this;
        type.download = download;
        type.sfw = {};
        type.nsfw = {};
        for (const endpoint of Object.keys(endpoints.sfw)){
            type.sfw[endpoint] = async function(){
                let res = await __request(endpoints.sfw[endpoint])
                return res;
            }
        };
        for (const endpoint of Object.keys(endpoints.nsfw)){
            type.nsfw[endpoint] = async () => {
                let res = await __request(endpoints.nsfw[endpoint])
                return res;
            }
        }
    }
}
module.exports = GetImages;