const rp = require('request-promise');

function getLiveStatus(id) {//获取房间主播的名字
    let options = {
        uri: 'https://api.live.bilibili.com/live_user/v1/UserInfo/get_anchor_in_room',
        qs: {
            roomid: id, // -> uri + '?access_token=xxxxx%20xxxxx'
        },
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.106 Safari/537.36'
        },
        json: true // Automatically parses the JSON string in the response
    };
    return rp(options);
}
module.exports=getLiveStatus;