import React from "react";
import { Outlet } from "react-router-dom";
import { SideBarMenu } from "../../components/elementos/SideBarHome";


const HomePage = () => {

  return (
    <div className="position-relative contenido">
      <nav className="navbar navbar-dark bg-dark">
        
      </nav>

      <div className="row contenido">
        <SideBarMenu />
        <div className="col">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export { HomePage };
