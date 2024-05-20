import { Outlet } from "react-router-dom";
import Home from "./Home/Home";
import LoginPage from "./LoginPage/LoginPage";
import "./RootComp.css";

const RootComp = () => {
  return (
    <div className="container">
      <header className="header"></header>
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
