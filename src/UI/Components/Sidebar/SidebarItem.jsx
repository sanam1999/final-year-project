import { Link, useLocation } from 'react-router-dom';
import { PATHS } from "../../Constants/Path";

export function Item({ list, type, settype }) {
  return (
    <>
      {list.map((item, index) => (
        <Link
          to={PATHS.Home} // or item.path if your object has a path
          key={index}
          className={`Singelitem ${item.name === type ? "active" : ""}`}
          onClick={settype ? () => settype(item.name) : undefined}
        >
          {item.icon}
          <p>{item.name}</p>
        </Link>
      ))}
    </>
  );
}
