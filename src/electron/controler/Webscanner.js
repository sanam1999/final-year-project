import nmap from 'node-nmap';
export function getScannerName(event, args) {
    let scan = new nmap.QuickScan('127.0.0.1');

  return scan;
}
