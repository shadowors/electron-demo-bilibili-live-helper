const {ipcRenderer} = require('electron');
const btn = document.querySelector('#submit_room_id')

btn.addEventListener('click',function () {
    let value = $('#room_id')[0].value;
    // console.log(value);
    ipcRenderer.send('submit-value',value);
    ipcRenderer.on('send-refer',(e,status)=>{
        if(status==='none'){
            alert('对不起没有此房间')
        }else{
            setTimeout(function () {
                window.location.reload();
            },300)
        }
    })
})