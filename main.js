const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')
const { electron } = require('process')
const shell = require('electron').shell

function createWindow () {
  const win = new BrowserWindow({
    frame: true,
    width: 1250,
    height: 750,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('src/index.html');
  // win.maximize();

  // win.webContents.openDevTools()

  let menu = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(menu);

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
