const {ipcRenderer} = require('electron')
const getObj = require('../main-process/generateObj.js');
let list = document.querySelectorAll('.list-group');

let time = null;
let i = 0;
let delay = 30*1000
function TimeOut() {
    time = setTimeout(function () {
        TimeOut();
        init();
    }, delay)
}
TimeOut();
function init() {//请求链接 更新状态 改变class
    list = document.querySelectorAll('.list-group');
    let le = list.length;
    let id = list[i].children[0].lastChild.children[0].textContent;
    console.log(id)
    ipcRenderer.send('update-LiveStatus', id);
    if (i == le - 1) {
        i = 0;
    } else {
        i++;
    }
}

