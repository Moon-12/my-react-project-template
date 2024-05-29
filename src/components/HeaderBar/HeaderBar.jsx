import { Link, Outlet } from "react-router-dom";
import "./HeaderBar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../redux/slice/menuSlice";
const HeaderBar = () => {
  const headers = useSelector((state) => state.header.headers);
  const dispatch = useDispatch();
  console.log(headers);
  const handleHeaderClick = (headerId) => {
    dispatch(fetchMenu({ headerId }));
  };
  return (
    <nav className="header-container">
      <Link to="/">Home</Link>
      <div className="header-items">
        {headers &&
          headers.map((header) => {
            return (
              <Link
                key={header.id}
                to={`/landing-page${header.route}`}
                onClick={() => handleHeaderClick(header.id)}
              >
                {header.header_name}
              </Link>
            );
          })}
      </div>
      <Link to="/">Logout</Link>
    </nav>
  );
};

export default HeaderBar;
