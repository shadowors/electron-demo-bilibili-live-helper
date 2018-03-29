// 打开软件的时候需要创建;

const storage = require('electron-json-storage')
const {ipcRenderer} = require('electron');


storage.getAll(function (err, data) {

})

ipcRenderer.send('need-json');
ipcRenderer.on('need-json-back',(e,data)=>{
    for(let key in data){
        createElement(data[key])
    }
});
// id: id,
//     real_id: real_id,
//     liveStatus: liveStatus,
//     roomName: roomName,
//     uname: uname,
//     face: face

//HTML结构
// <!--<li class="list-group clearfix">-->
// <!--<a href="#">-->
// <!--<img src="">-->
// <!--<div>-->
// <!--<strong></strong>-->
// <!--<p></p>-->
// <!--</div>-->
// <!--<div class="room_id">房间号:-->
// <!--<span></span></div>-->
// <!--</a>-->
// <!--</li>-->

function createElement(obj) {//创建元素
    let liveStatus = obj.liveStatus;
    let id = obj.id;
    let real_id = obj.real_id;
    let roomName = obj.roomName;
    let uname = obj.uname;
    let face = obj.face;

    let parent = $('.anchor-list');

    let li = document.createElement('li');
    let a = document.createElement('a');
    let img = document.createElement('img');
    let strong = document.createElement('strong');
    let p = document.createElement('p');
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    let span = document.createElement('span');

    if(liveStatus!==1){
        li.className='list-group clearfix NotLive '+'List-'+id
    }else{
        li.className='list-group clearfix '+'List-'+id
    }
    div2.className='room_id';


    img.src=face;
    strong.textContent = uname
    p.textContent =roomName;
    div2.textContent = '房间号:'
    span.textContent = id;

    li.appendChild(a);
    a.appendChild(img);
    a.appendChild(div);
    a.appendChild(div2);
    div.appendChild(strong);
    div.appendChild(p);
    div2.appendChild(span)

    parent.append(li)
}