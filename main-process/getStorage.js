const storage = require('electron-json-storage');
const {ipcMain} = require('electron');

ipcMain.on('need-json',(e)=>{
    storage.getAll(function (err, data) {
        e.sender.send('need-json-back',data)
    });
});

