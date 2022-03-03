import React from "react";
import Chart from "../../components/chart";
import "./dashboard.scss";

const Dashboard = () => {
  const renderSidebar = () => {
    return (
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">Crypto web</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="void" className="active">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      {renderSidebar()}
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <span className="admin_name">Mehul Jariwala</span>
        </nav>
        <div className="home-content">
          <div>
            <Chart />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
