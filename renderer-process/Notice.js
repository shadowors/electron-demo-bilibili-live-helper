const {ipcRenderer} = require('electron');

ipcRenderer.on('change-status',(e,obj)=>{
    let status = obj.last_status;
    let room_id = obj.id;
    let userName = obj.uname;
    let roomName = obj.roomName;
    let face = obj.face;
    let title = '主播:'+userName;
    if(status==1){
        let myNotification = new Notification(title, {
            body: roomName,
            icon:face
        })
        myNotification.onclick = () => {
            console.log('Click!')
        }
    }
})