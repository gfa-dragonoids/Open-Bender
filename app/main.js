const { app, BrowserWindow } = require('electron');

app.whenReady().then(function () {

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false,
    icon: (__dirname + '/icon.icns'),
    webPreferences: {
      nodeIntegration: true
    },
  });

  win.loadFile('./views/home/index.html');
});
