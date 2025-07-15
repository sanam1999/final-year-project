import { ipcMain } from 'electron';

export function ipcMainHandle(key, handler) {
  ipcMain.handle(key, async (event, ...args) => {
    return await handler(...args); // properly return the result
  });
}
