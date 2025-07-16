import {
  FaSearch,
  FaGlobe,
  FaNetworkWired,
  FaBug,
  FaTerminal,
  FaBiohazard,
  FaUserSecret,
  FaTools,
  FaMobileAlt,
  FaToolbox,
  FaBookOpen,
} from "react-icons/fa";
import { Item } from "./SidebarItem";

import "./Sidebar.css";

function Sidebar({type,settype}) {
   console.log(type);
  const list = [
   {name: "All", icon: <FaBookOpen />},
  { name: "Information Gathering", icon: <FaSearch /> },
  { name: "Web Application Hacking", icon: <FaGlobe /> },
  { name: "Network Hacking Tools", icon: <FaNetworkWired /> },
  { name: "Exploitation Tools", icon: <FaBug /> },
  { name: "Reverse Shell & Listener Tools", icon: <FaTerminal /> },
  { name: "Malware Testing Tools", icon: <FaBiohazard /> },
  { name: "Social Engineering / Phishing", icon: <FaUserSecret /> },
  { name: "Post Exploitation Tools", icon: <FaTools /> },
  { name: "Mobile Hacking", icon: <FaMobileAlt /> },
  { name: "All-in-One Toolkits", icon: <FaToolbox /> },
];

   return (
     <div className="Sidebar">
        <Item list={list} settype={settype} type={type}/>
     </div>
   );
}

export default Sidebar;
