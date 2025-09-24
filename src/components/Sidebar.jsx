import React, { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = ["Dashboard", "Projects", "Tickets", "Employee", "Account"];

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
