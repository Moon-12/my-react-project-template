import { Outlet } from "react-router-dom";

import "./RootComp.css";
import HeaderBar from "./HeaderBar/HeaderBar";

const RootComp = () => {
  return (
    <div className="container">
      <header className="header">
        <HeaderBar />
      </header>
      <div className="content-body">
        <nav className="sidenav"></nav>
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
