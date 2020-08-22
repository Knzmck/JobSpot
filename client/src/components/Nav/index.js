import React from "react";
import { Header, Menu, Container } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";
import API from "../../utils/API";

const styles = {
  navContainer: {
    backgroundColor: "rgb(22 25 29)"
  },
  navHeader: {
    textAlign: "center",
    fontSize: "4.5em",
    color: "white",
    fontFamily: "Times New Roman"
  },
  spanHeader: {
    color: "#F25C05"
  },
  navItems: {
    color: "white",
    textDecoration: "none",
    fontSize: 18,
    fontFamily: "Times New Roman"
  }
}

export default function Nav() {
  const history = useHistory();
  const handleItemClick = (e) => {
    API.logout().then((res) =>{
      history.push("/")
    })
  };

  return (
    <>
      <Container fluid style={styles.navContainer} className="nav-container">
        <Header style={styles.navHeader} as="h2" id="nav-logo">
          <span style={styles.spanHeader} id="job">Job</span>Spot
        </Header>
        <Menu secondary pointing id="nav-menu">
          <Menu.Item
            id="dashboard-item"
            name="dashboard"
          >
            <Link style={styles.navItems} to="/home" id="nav-link-home">Dashboard</Link>
          </Menu.Item>
          <Menu.Item id="job-item" name="Add New Job">
            <Link style={styles.navItems} to= "/create-job" id="nav-link-create">Add New Job</Link>
          </Menu.Item>
          <Menu.Menu position="right" id="nav-menu2">
            <Menu.Item id="logout-btn" name="Logout" onClick={handleItemClick}>
              <Link style={styles.navItems} id="nav-link-logout" onClick={handleItemClick}>
                Logout
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </>
  );
}
