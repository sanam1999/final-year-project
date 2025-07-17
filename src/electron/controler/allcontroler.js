import { ipcMainHandle } from '../ipcHandlers.js';
import nmap from 'node-nmap';

nmap.nmapLocation = 'nmap';

export function registerIpcHandlers() {
  ipcMainHandle('getSimpleObject', async (event, args) => {
    const { type, searchTerm} = args;
    let scan;
    console.log(type)
    return new Promise((resolve, reject) => {
      
      try {
         scan = new nmap.QuickScan(searchTerm);
        // switch (type) {
        //   case "QuickScan":
        //     scan = new nmap.QuickScan(searchTerm);
        //     break;
        //   case "PingScan":
        //     scan = new nmap.PingScan(searchTerm);
        //     break;
        //   case "OsScan":
        //     scan = new nmap.OsScan(searchTerm);
        //     break;
        //   case "PortScan":
        //     scan = new nmap.PortScan(searchTerm);
        //     break;
        //   case "ServiceScan":
        //     scan = new nmap.ServiceScan(searchTerm);
        //     break;
        //   case "FullScan":
        //     scan = new nmap.FullScan(searchTerm);
        //     break;
        //   case "OsAndPortScan":
        //     scan = new nmap.OsAndPortScan(searchTerm);
        //     break;
        //   default:
        //     return reject(new Error("Invalid scan type"));
        // }

        scan.on('complete', data => resolve(data));
        scan.on('error', err => reject(err));
        scan.startScan();

      } catch (err) {
        reject(err);
      }
    });
  });

  ipcMainHandle('getName', () => 'Sanam fkjsd');
}
