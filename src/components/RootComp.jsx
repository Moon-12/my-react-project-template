import { Outlet, useLocation } from "react-router-dom";

import "./RootComp.css";
import HeaderBar from "./HeaderBar/HeaderBar";
import SideMenu from "./SideMenu/SideMenu";

const RootComp = () => {
  const location = useLocation();

  // Check if the current path is '/landing-page/academics'
  const showSideMenu = /^\/landing-page\//.test(location.pathname);
  return (
    <div className="container">
      <header className="header">
        <HeaderBar />
      </header>
      <div className="content-body">
        <nav className="sidenav">{showSideMenu && <SideMenu />}</nav>
        <main className="content">
          <Outlet />
        </main>
        <aside className="ads"></aside>
      </div>
      <footer className="footer"></footer>
    </div>
  );
};
export default RootComp;
