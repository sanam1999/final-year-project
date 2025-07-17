const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
getSimpleObject: (args) => ipcRenderer.invoke('getSimpleObject', args),
  getName: () => ipcRenderer.invoke('getName'),
});


