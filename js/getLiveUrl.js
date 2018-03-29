const rp = require('request-promise');


function getLiveUrl(id) {//获取下载地址
    let options = {
        uri: 'https://api.live.bilibili.com/api/playurl',
        qs: {
            player: 1,
            cid:id,
            quality:0,
            platform:'flash',
            otype:'json'
        },
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.106 Safari/537.36'
        },
        json: true // Automatically parses the JSON string in the response
    };
    return rp(options);

}
module.exports=getLiveUrl;