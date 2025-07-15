import PATHS from "../../Constants/Path";
import { Link } from 'react-router-dom';
function Header() {

  return (
    <header className="header">
        <h1>My Application Header</h1>
         <Link to={PATHS.Home}>Home page</Link>
         <br />
         <Link to={PATHS.Profile}>Profile</Link>
      
    </header>
  );
}

export default Header;