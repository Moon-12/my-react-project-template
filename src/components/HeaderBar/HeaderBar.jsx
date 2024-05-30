import { Link } from "react-router-dom";
import "./HeaderBar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../redux/slice/menuSlice";
import { useEffect } from "react";
import { clearHeaders, fetchHeader } from "../../redux/slice/headerSlice";
import { clearToken } from "../../redux/slice/authSlice";

const HeaderBar = () => {
  const roleId = useSelector(
    (state) => state.auth.loginResponse && state.auth.loginResponse.roleId
  );
  const loginResponse = useSelector((state) => state.auth.loginResponse);

  const headers = useSelector((state) => state.header.headers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (roleId) {
      dispatch(fetchHeader({ roleId }));
    } else {
      dispatch(clearHeaders());
    }
  }, [roleId, dispatch]);

  const handleHeaderClick = (headerId) => {
    dispatch(fetchMenu({ headerId }));
  };

  const handleLogoutFn = () => {
    dispatch(clearToken());
  };

  return (
    <nav className="header-container">
      <Link to="/" className="header-links">
        Home
      </Link>
      <div className="header-items">
        {headers &&
          headers.map((header) => {
            return (
              <Link
                className="header-links"
                key={header.id}
                to={`/landing-page${header.route}`}
                onClick={() => handleHeaderClick(header.id)}
              >
                {header.header_name}
              </Link>
            );
          })}
      </div>
      {loginResponse.isLoggedIn ? (
        <Link to="/login" className="header-links" onClick={handleLogoutFn}>
          Logout
        </Link>
      ) : null}
    </nav>
  );
};

export default HeaderBar;
