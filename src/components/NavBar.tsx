import React from "react";

interface Props {
  items: string[];
  heading: string;
  onNavItemSelect: (menuItem: string) => void;
}

const NavBar = ({ items, heading, onNavItemSelect }: Props) => {
  return (
    <div className="mb-3">
      <h1 className="mb-3">
        <span className="badge text-bg-light">{heading}</span>
      </h1>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {items.map((item) => (
                <a
                  className="navbar-brand"
                  key={item}
                  aria-current="page"
                  href="#"
                  onClick={() => onNavItemSelect(item)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
