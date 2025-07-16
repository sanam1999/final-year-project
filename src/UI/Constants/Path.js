
export const PATHS  = {
 Home: '/',
 Profile: '/Profile',
};


import { 
  FaSearch, 
  FaDatabase, 
  FaNetworkWired, 
  FaBug, 
  FaTerminal, 
  FaUserSecret, 
  FaMobileAlt, 
  FaTools, 
  FaEnvelopeOpenText,
  FaLock,
  FaWifi,
  FaShieldAlt,
  FaUserShield,
  FaLink
} from 'react-icons/fa';

export const HackingToolset = {
  "Information Gathering": {
    tools: [
      {
        Path: '/Whois-Lookup-Tool',
        name: "Whois Lookup Tool",
        Icon: FaSearch,
        description: "Performs domain WHOIS lookups to gather ownership and registrar details."
      },
      {
        Path: '/DNS-Subdomain-Scanner-GUI',
        name: "DNS & Subdomain Scanner GUI",
        Icon: FaNetworkWired,
        description: "Scans DNS records and finds subdomains using tools like Sublist3r or Dig."
      },
      {
        Path: '/IP-Geolocation-OSINT-Scanner',
        name: "IP Geolocation & OSINT Scanner",
        Icon: FaSearch,
        description: "Finds geographic and public info about IP addresses using OSINT sources."
      },
      {
        Path: '/Website-Recon-Toolkit',
        name: "Website Recon Toolkit",
        Icon: FaSearch,
        description: "Collects headers, open ports, and technology stack from target websites."
      },
      {
        Path: '/Email-Harvester-GUI',
        name: "Email Harvester GUI",
        Icon: FaEnvelopeOpenText,
        description: "Extracts email addresses from domains using crawlers and public records."
      }
    ]
  },

  "Web Application Hacking": {
    tools: [
      {
        Path: '/SQL-Injection-Tester',
        name: "SQL Injection Tester",
        Icon: FaDatabase,
        description: "Tests input fields for SQL injection vulnerabilities with payloads."
      },
      {
        Path: '/XSS-Payload-Injector',
        name: "XSS Payload Injector",
        Icon: FaBug,
        description: "Injects JavaScript payloads into forms to test for cross-site scripting."
      },
      {
        Path: '/CSRF-Tester-GUI',
        name: "CSRF Tester GUI",
        Icon: FaShieldAlt,
        description: "Simulates CSRF attacks to test session and token protections."
      },
      {
        Path: '/LFI-RFI-Scanner',
        name: "LFI/RFI Scanner",
        Icon: FaLock,
        description: "Detects Local and Remote File Inclusion vulnerabilities in web apps."
      },
      {
        Path: '/Admin-Page-Finder',
        name: "Admin Page Finder",
        Icon: FaUserShield,
        description: "Brute-forces common admin URLs to locate hidden login panels."
      },
      {
        Path: '/Broken-Authentication-Tester',
        name: "Broken Authentication Tester",
        Icon: FaLock,
        description: "Performs brute-force login attempts to test authentication strength."
      }
    ]
  },

  "Network Hacking Tools": {
    tools: [
      {
        Path: '/Port-Scanner-GUI',
        name: "Port Scanner GUI",
        Icon: FaNetworkWired,
        description: "Scans for open ports and services on target machines using Nmap-style techniques."
      },
      {
        Path: '/MITM-Attack-Tool',
        name: "MITM Attack Tool",
        Icon: FaUserSecret,
        description: "Performs Man-in-the-Middle attacks via ARP spoofing or DNS spoofing."
      },
      {
        Path: '/Packet-Sniffer-Injector-GUI',
        name: "Packet Sniffer & Injector GUI",
        Icon: FaNetworkWired,
        description: "Captures and injects packets on the network using Scapy or pcap."
      },
      {
        Path: '/WiFi-Deauthenticator-Monitor-GUI',
        name: "Wi-Fi Deauthenticator / Monitor GUI",
        Icon: FaWifi,
        description: "Performs Wi-Fi deauthentication attacks and monitors nearby networks."
      },
      {
        Path: '/DHCP-Starvation-Attack-GUI',
        name: "DHCP Starvation Attack GUI",
        Icon: FaNetworkWired,
        description: "Launches DHCP starvation to exhaust the IP pool in a network."
      }
    ]
  },

  "Exploitation Tools": {
    tools: [
      {
        Path: '/Metasploit-GUI-Launcher',
        name: "Metasploit GUI Launcher",
        Icon: FaTools,
        description: "Use for launching and managing Metasploit modules for exploiting known vulnerabilities."
      },
      {
        Path: '/Exploit-Searcher-GUI',
        name: "Exploit Searcher GUI",
        Icon: FaSearch,
        description: "Fetch and browse exploit code from ExploitDB or local CVE databases."
      },
      {
        Path: '/Payload-Generator-GUI',
        name: "Payload Generator GUI",
        Icon: FaTerminal,
        description: "Generate reverse shells, bind shells, and obfuscated payloads for multiple platforms."
      },
      {
        Path: '/Social-Engineering-Toolkit-GUI',
        name: "Social Engineering Toolkit GUI",
        Icon: FaUserSecret,
        description: "Clone websites, send phishing emails, and craft payloads for social engineering attacks."
      },
      {
        Path: '/File-Packer-Binder',
        name: "File Packer & Binder",
        Icon: FaTools,
        description: "Bind malicious payloads to legitimate files for use in red team engagements."
      }
    ]
  },

  "Reverse Shell & Listener Tools": {
    tools: [
      {
        Path: '/Reverse-Shell-Generator-GUI',
        name: "Reverse Shell Generator GUI",
        Icon: FaTerminal,
        description: "Creates reverse shell commands for Bash, Python, PHP, and more."
      },
      {
        Path: '/Listener-Manager-GUI',
        name: "Listener Manager GUI",
        Icon: FaTerminal,
        description: "Starts and manages Netcat or custom shell listeners across ports."
      },
      {
        Path: '/Command-Control-Panel-GUI',
        name: "Command & Control Panel GUI",
        Icon: FaUserSecret,
        description: "Manage compromised machines, issue commands, and track sessions."
      },
      {
        Path: '/Beacon-Tracker',
        name: "Beacon Tracker",
        Icon: FaSearch,
        description: "Visual tracker for active beaconing payloads from target machines."
      }
    ]
  },

  "Malware Testing Tools": {
    tools: [
      {
        Path: '/Keylogger-Builder-GUI',
        name: "Keylogger Builder GUI",
        Icon: FaBug,
        description: "Creates simple educational keyloggers for testing key capture."
      },
      {
        Path: '/Backdoor-Generator-GUI',
        name: "Backdoor Generator GUI",
        Icon: FaUserSecret,
        description: "Builds persistent backdoors for controlled red-team demos."
      },
      {
        Path: '/Crypter-Obfuscator-GUI',
        name: "Crypter / Obfuscator GUI",
        Icon: FaShieldAlt,
        description: "Encrypts or obfuscates payloads to evade basic antivirus detection."
      },
      {
        Path: '/RAT-Builder-GUI',
        name: "RAT Builder GUI",
        Icon: FaBug,
        description: "Build and manage simple Remote Access Trojan payloads (for lab use)."
      }
    ]
  },

  "Social Engineering / Phishing": {
    tools: [
      {
        Path: '/Phishing-Page-Creator-GUI',
        name: "Phishing Page Creator GUI",
        Icon: FaUserSecret,
        description: "Creates fake login pages to simulate phishing attacks."
      },
      {
        Path: '/Link-Shortener-Tracker-GUI',
        name: "Link Shortener + Tracker GUI",
        Icon: FaLink,
        description: "Shortens URLs and tracks victim interactions with analytics."
      },
      {
        Path: '/Fake-Login-Page-Designer',
        name: "Fake Login Page Designer",
        Icon: FaUserSecret,
        description: "Design Facebook, Gmail, or custom login pages for awareness training."
      },
      {
        Path: '/Email-Spoofer-GUI',
        name: "Email Spoofer GUI",
        Icon: FaEnvelopeOpenText,
        description: "Send spoofed emails for phishing simulations."
      },
      {
        Path: '/Clipboard-Hijacker-GUI',
        name: "Clipboard Hijacker GUI",
        Icon: FaBug,
        description: "Monitors or hijacks clipboard values (e.g., to simulate malware behavior)."
      }
    ]
  },

  "Post Exploitation Tools": {
    tools: [
      {
        Path: '/Privilege-Escalation-Checklist-GUI',
        name: "Privilege Escalation Checklist GUI",
        Icon: FaLock,
        description: "Guides through common privilege escalation vectors on Windows/Linux."
      },
      {
        Path: '/File-Directory-Enumeration-Tool',
        name: "File/Directory Enumeration Tool",
        Icon: FaSearch,
        description: "Lists and filters sensitive files/folders post-compromise."
      },
      {
        Path: '/Password-Dumper',
        name: "Password Dumper",
        Icon: FaLock,
        description: "Extracts stored credentials and hashes from systems."
      },
      {
        Path: '/Persistence-Techniques-GUI',
        name: "Persistence Techniques GUI",
        Icon: FaUserSecret,
        description: "Implements registry/run key backdoors, service hijacking, etc."
      },
      {
        Path: '/Screenshot-Keylogger-Panel',
        name: "Screenshot / Keylogger Panel",
        Icon: FaBug,
        description: "Manage post-exploit screenshots or keylogging data."
      }
    ]
  },

  "Mobile Hacking": {
    tools: [
      {
        Path: '/APK-Analyzer-Repacker-GUI',
        name: "APK Analyzer & Repacker GUI",
        Icon: FaMobileAlt,
        description: "Disassembles APKs, allows editing, and repacks signed APKs."
      },
      {
        Path: '/Android-Exploit-Injector-GUI',
        name: "Android Exploit Injector GUI",
        Icon: FaMobileAlt,
        description: "Injects payloads into legitimate Android apps for testing."
      },
      {
        Path: '/ADB-GUI-Android-Control',
        name: "ADB GUI for Android Control",
        Icon: FaMobileAlt,
        description: "GUI frontend for running ADB commands and accessing Android devices."
      }
    ]
  },

  "All-in-One Toolkits": {
    tools: [
      {
        Path: '/Kali-Tools-GUI-Launcher',
        name: "Kali Tools GUI Launcher",
        Icon: FaTools,
        description: "Access and launch Kali Linux tools from a centralized GUI."
      },
      {
        Path: '/Red-Team-Toolkit-Dashboard',
        name: "Red Team Toolkit Dashboard",
        Icon: FaUserSecret,
        description: "Central dashboard for all red team operations and payloads."
      },
      {
        Path: '/Bug-Bounty-Toolkit',
        name: "Bug Bounty Toolkit",
        Icon: FaBug,
        description: "Collection of tools, checklists, and payloads for bug bounty testing."
      },
      {
        Path: '/CTF-Companion-App',
        name: "CTF Companion App",
        Icon: FaTools,
        description: "Helps with decoding, enumeration, and exploitation during CTFs."
      }
    ]
  }
};
