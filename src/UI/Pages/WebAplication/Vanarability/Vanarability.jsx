import { useState } from 'react';
import './Vanarability.css';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setLocation] = useState("");
  const [output, setOutput] = useState("Search results will appear here...");

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert("Please enter a search term");
      return;
    }
window.electron.getSimpleObject({ searchTerm: searchTerm, type: type }).then((data) => {
  console.log('Static data received:', data);

  

 setOutput(data);
});

     
  };

  return (
    <div className="app-container">
      <div className="search-container">
        <div className="search-controls">
          <div className="search-group">
            <label className='tital'>Enter ip Enter IP Address </label>
            <input
              type="text"
              placeholder="0.0.0.0 - test.com"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="search-group">
            <label>Select</label>
            <select
              value={type}
              onChange={(e) => setLocation(e.target.value)}
            >
                <optgroup label="Scan Types">
                <option value="QuickScan">Fast scan</option>
                <option value="OsScan">OS detection only</option>
                <option value="OsAndPortScan">OS + Port scan</option>
                <option value="PortScan">Port scan</option>
                <option value="FullScan">Scan all TCP ports</option>
                <option value="PingScan">Ping-only host discovery</option>
                <option value="ServiceScan">Detect services and versions</option>
                <option value="CustomScan">Custom Nmap options</option>
                </optgroup>
            </select>
          </div>

          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      
     <div className="output-box">
  <pre>
    {Array.isArray(output) ? (
      output.map((value, key) => (
        <div key={key}>
          Hostname: {value.hostname}
          <br />
          IP: {value.ip}
          <br />
          MAC: {value.mac}
          <br />
          Open Port: {value.openPort}
          <br /><br />
        </div>
      ))
    ) : (
      output
    )}
  </pre>
</div>
    </div>
  );
}

export default SearchComponent;