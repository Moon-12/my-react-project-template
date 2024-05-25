import { Link, Outlet } from "react-router-dom";
import "./HeaderBar.css";
import { useSelector } from "react-redux";
const HeaderBar = () => {
  const headers = useSelector((state) => state.header.headers);
  console.log(headers);
  return (
    <nav className="header-container">
      <Link to="/">Home</Link>
      {headers &&
        headers.map((header) => {
          return (
            <Link key={header.id} to={`/landing-page${header.route}`}>
              {header.header_name}
            </Link>
          );
        })}
      <Link to="/">Logout</Link>
    </nav>
  );
};

export default HeaderBar;
