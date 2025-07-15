const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  getSimpleObject: () => ipcRenderer.invoke('getSimpleObject'),
  getName: () => ipcRenderer.invoke('getName'),
});
