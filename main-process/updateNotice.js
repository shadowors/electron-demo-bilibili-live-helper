const {ipcMain} = require('electron');
const storage = require('electron-json-storage');
const getObj = require('./generateObj.js');


ipcMain.on('submit-value', (e, value) => {
    getObj(value,e)
});




