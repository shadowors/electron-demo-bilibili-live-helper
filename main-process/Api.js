const getAnchor = require('../js/getAnchor'); //包含
const getInfo = require('../js/getInfo.js'); //包含主播名字
const getLiveUrl = require('../js/getLiveUrl.js'); //直播视频下载地址
const getRealRoomId = require('../js/getRealRoomId.js');//房间初始化 包含真实room_id;请求需要此真实id 要不然请求不到


module.exports = {getAnchor,getInfo,getLiveUrl,getRealRoomId}