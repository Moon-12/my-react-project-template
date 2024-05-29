import { Link, Outlet } from "react-router-dom";
import "./HeaderBar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../redux/slice/menuSlice";
import { useEffect } from "react";
import { clearHeaders, fetchHeader } from "../../redux/slice/headerSlice";
import { clearToken } from "../../redux/slice/authSlice";
import { checkLoggedIn } from "../../utils/tokenUtils";

const HeaderBar = () => {
  const roleId = useSelector(
    (state) => state.auth.loginResponse && state.auth.loginResponse.roleId
  );
  const token = useSelector((state) => state.auth.loginResponse);

  const headers = useSelector((state) => state.header.headers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (roleId) {
      dispatch(fetchHeader({ roleId }));
    } else {
      dispatch(clearHeaders());
    }
  }, [roleId]);

  const handleHeaderClick = (headerId) => {
    dispatch(fetchMenu({ headerId }));
  };

  const handleLogoutFn = () => {
    dispatch(clearToken());
  };
  const loginStatus = token ? checkLoggedIn(token.exp) : { isLoggedIn: false };

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
      {loginStatus.isLoggedIn ? (
        <Link to="/login" onClick={handleLogoutFn}>
          Logout
        </Link>
      ) : null}
    </nav>
  );
};

export default HeaderBar;
