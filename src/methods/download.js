const https = require('https');
const fs = require('fs')

module.exports = function download(url, path, filename){
    https.get(url, function(res){
        let file = fs.createWriteStream(`${path}/${filename}`)
        return res.pipe(file);
    })
}