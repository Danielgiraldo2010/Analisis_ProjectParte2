import React from "react";
import { Outlet, Link } from "react-router-dom";
import { SideBarGrafo } from "../components/elementos/SideBar";
import { GrGraphQl } from "react-icons/gr";

const Board = () => {
  return (
    <div className="position-relative contenido">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="../home" className="btn btn-dark">
            <GrGraphQl style={{ fontSize: '60px' }} />
          </Link>
          <span className="navbar-brand">GraPhic</span>
        </div>
      </nav>

      <div className="row contenido">
        <SideBarGrafo />
        <Outlet />
      </div>
    </div>
  );
};

export { Board };
