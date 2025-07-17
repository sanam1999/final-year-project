import { app, BrowserWindow, ipcMain} from 'electron';
import { getPreloadPath, getUIPath } from './pathResolver.js';
import { isDev } from './util.js';



import { registerIpcHandlers } from './controler/allcontroler.js';

app.on('ready', () => {
const mainWindow = new BrowserWindow({
  width: 1200,
  height: 800,
  webPreferences: {
    preload: getPreloadPath(),  
    contextIsolation: true,       
    nodeIntegration: false,       
    enableRemoteModule: false      
  }
});


  if (isDev()) {
    mainWindow.loadURL('http://localhost:2001');
  } else {
    mainWindow.loadFile(getUIPath());
  }

  registerIpcHandlers();
  mainWindow.on('closed', () => {
    app.quit();
  });
});



