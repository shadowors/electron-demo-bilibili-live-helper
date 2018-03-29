const {ipcMain} = require('electron');
const storage = require('electron-json-storage')

const getAnchor = require('../js/getAnchor'); //包含
const getInfo = require('../js/getInfo.js'); //包含主播名字
const getLiveUrl = require('../js/getLiveUrl.js'); //直播视频下载地址
const getRealRoomId = require('../js/getRealRoomId.js');//房间初始化 包含真实room_id;请求需要此真实id 要不然请求不到

//以上均返回promise


function getObj(id,e) {//从链接中获取对象
    getRealRoomId(id).then(function (res) {
        let real_id = res.data.room_id;
        if(real_id!==undefined){
            getInfo(real_id).then(function (res) {
                let roomName = res.data.title;
                let liveStatus = res.data.live_status;
                getAnchor(real_id).then(function (res) {
                    let uname = res.data.info.uname;
                    let face = res.data.info.face;
                    getLiveUrl(real_id).then(function (data) {
                        let obj = {
                            id: id,
                            real_id: real_id,
                            liveStatus: liveStatus,
                            roomName: roomName,
                            uname: uname,
                            face: face,
                            last_status:liveStatus
                        }
                        storage.set(id,obj,function (err) {})
                        createELm(obj,e)
                        e.sender.send('send-refer','block')
                    })
                })
            })
        }else{
            e.sender.send('send-refer','none')
        }

    })
}

function createELm(obj,e){//更新elm

}


module.exports = getObj
