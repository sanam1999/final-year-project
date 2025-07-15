import { ipcMainHandle } from '../ipcHandlers.js';

export function registerIpcHandlers() {
  ipcMainHandle('getSimpleObject', () => {
    return {
      name: 'Sanam Shrestha',
      role: 'Developer',
      year: 2025
    };
  });

  ipcMainHandle('getName', () =>  'Sanam fkjsd'
    );
}
