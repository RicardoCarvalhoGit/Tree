import React, { useState } from "react";
import styles from "./HomeNavBarComponent.module.css";
import TreeLogo from "../../../assets/images/TreeLogo.png"

const HomeNavBarComponent: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
    return (
      <div className={styles.navbar}>
        <div className={styles.caranguejo} onClick={toggleSidebar}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={styles.logo}>
            <img src={TreeLogo} alt="Logo" />
        </div>
        
        {sidebarOpen && (
          <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : "sidebar"}`}>
            <button className={styles.closebtn} onClick={toggleSidebar}>✕</button>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/ranking">Ranking</a></li>
              <li><a href="/certification">Certificação</a></li>
              <li><a href="/CertificationRequest">Solicite Sua Certificação</a></li>
            </ul>
          </div>
        )}
      </div>
    );
  };

export default HomeNavBarComponent;