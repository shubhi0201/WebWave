import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome
import "./Header.css";

const menuItems = [
  {
    name: "Home",
    link: "#",
    submenu: [
      { name: "Our Team", link: "#" },
      { name: "Our Mission", link: "#" },
    ],
  },
  {
    name: "Pages",
    link: "#",
    submenu: [
      { name: "Our Team", link: "#" },
      { name: "Our Mission", link: "#" },
    ],
  },
  {
    name: "Services",
    link: "#",
    submenu: [
      { name: "Web Development", link: "#" },
      { name: "SEO Optimization", link: "#" },
    ],
  },
  {
    name: "Case Studies",
    link: "#",
    submenu: [
      { name: "E-commerce", link: "#" },
      { name: "Fintech", link: "#" },
    ],
  },
  {
    name: "Blog",
    link: "#",
    submenu: [
      { name: "Tech Trends", link: "#" },
      { name: "AI Innovations", link: "#" },
    ],
  },
  { name: "Contact", link: "#" },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="navbar">
      <div className="main">
        <div className="logo-image">MyBrand</div>
        <ul className="navbar-item-links">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${item.submenu ? "dropdown" : ""}`}
              onMouseEnter={() => item.submenu && setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a href={item.link}>
                {item.name}
                {item.submenu && (
                  <i
                    className={`fa fa-chevron-down dropdown-icon `} style={{marginLeft:10, fontSize:'12px'}}
                  ></i>
                )}
              </a>
              {item.submenu && openDropdown === index && (
                <ul className="dropdown-menu">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} >
                      <a href={subItem.link}>{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      {/* Menu Button with Hover Effect */}
      <div  className="hamburger-menu-container">

      <div
      className="hamburger-menu"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[-10, 0, -10].map((initialX, index) => (
          <div
            key={index}
            className={`line ${isHovered ? "hovered" : ""}`}
            style={{
              "--initial-x": `${initialX}px`,
              "--direction": index % 2 === 0 ? "1" : "-1",
            }}
          />
        ))}
      </div>
      </div>
      </div>

    </nav>
  );
};

export default Header;
