import { useState } from "react";
import { useSelector } from "react-redux";
import "./SideMenu.css";
import { Link } from "react-router-dom";
const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      {item.SubMenus && item.SubMenus.length > 0 ? (
        <>
          <span
            className={`caret ${isOpen ? "caret-down" : ""}`}
            onClick={handleToggle}
          >
            {item.MENU_NAME}
          </span>
          <ul className={`nested ${isOpen ? "active" : ""}`}>
            {item.SubMenus.map((subItem) => (
              <MenuItem key={subItem.ID} item={subItem} />
            ))}
          </ul>
        </>
      ) : (
        <Link
          className="menu-links"
          to={`/landing-page/${item.MENU_NAME.toLowerCase().replace(
            /\s+/g,
            "-"
          )}`}
        >
          {item.MENU_NAME}
        </Link>
      )}
    </li>
  );
};

const SideMenu = () => {
  const menu = useSelector((state) => state.menu.menu);
  return (
    <ul id="myUL">
      {menu && menu.map((item) => <MenuItem key={item.ID} item={item} />)}
    </ul>
  );
};

export default SideMenu;
