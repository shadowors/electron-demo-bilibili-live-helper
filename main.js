const {app, BrowserWindow} = require('electron');

class App {
    constructor() {
        this.win;
        this.tray;
    }
    shutDown() {
        app.quit();
    }
    startUp() {
        this.init();
    }
    init() {
        this.createWindow();
        this.lib()
    }
    createWindow() {
        let options = {
            width: 300,
            height: 500,
            resizable:false,
            // titleBarStyle: 'hiddenInset'
        }
        this.win = new BrowserWindow(options);
        this.win.on('closed', () => {
            this.shutDown();
        })
        // this.win.openDevTools();
        this.win.loadURL('file:' + __dirname + '/index.html');

    }
    getPosition() {
    }
    togglePosition() {
    }
    showWindow() {
    }
    lib() {//装载库
        require('./main-process/getStorage');//获取json的库
        require('./main-process/updateNotice');//
        require('./main-process/updateLiveStatus');
    }

}

app.on('ready', () => {
    let app = new App();
    app.startUp()
});

