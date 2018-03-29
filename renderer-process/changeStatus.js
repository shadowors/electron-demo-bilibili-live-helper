const {ipcRenderer} = require('electron');


ipcRenderer.on('change-status',(e,obj)=>{
    let id = obj.id;
    let roomName = obj.roomName
    let el = '.List-'+obj.id;
    let removeCls = 'NotLive';
    if(obj.liveStatus==1){
        $(el).removeClass(removeCls);
        $(el).find('p')[0].innerText = roomName;//更新roomName
    }else if(obj.liveStatus!==1&&$(el).hasClass(removeCls)==false){
        $(el).addClass(removeCls);
    }
})