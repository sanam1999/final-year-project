import path from 'path';
import { app } from 'electron';

export function getPreloadPath() {
  return path.join(app.getAppPath(), process.env.NODE_ENV === 'development' ? '.' : '..', 'src/electron/preload.js');
}

export function getUIPath() {
  return path.join(app.getAppPath(), 'dist-react/index.html');
}
