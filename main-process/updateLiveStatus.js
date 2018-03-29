const {ipcMain} = require('electron');
const request = require('request')
const {getAnchor,getInfo,getLiveUrl,getRealRoomId} = require('./Api');
const storage = require('electron-json-storage')
const options = {
    uri:'https://sc.ftqq.com/SCU7517T989c8a40ec6699ed1ce4f0b10a5880955a536a5e1d72f.send',
    qs:{
        text:''
    }
}


ipcMain.on('update-LiveStatus',(e,id)=>{
    updateStatus(id,e)
});

function updateStatus(id,e) {//提醒更改通知 之后更改状态
    storage.get(id,function (err,storageData) {
        let old_Data = storageData;
        console.log(old_Data,id);
        getRealRoomId(id).then(function (res) {
            let real_id = res.data.room_id;
            getInfo(real_id).then(function (res) {
                let liveStatus = res.data.live_status;
                let roomName = res.data.title;
                old_Data.last_status = liveStatus;
                storage.set(id,old_Data,function (){});
                if(old_Data.last_status!==old_Data.liveStatus){//假如获取的状态不等于 之前获取的状态
                    old_Data.liveStatus=old_Data.last_status;
                    old_Data.roomName = roomName;
                    storage.set(id,old_Data,function (){});
                    e.sender.send('change-status',old_Data); //需要更新面板的信息
                }
            })
        })
    })
}


