// Import anchor tag instead of Link
import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse
} from "reactstrap";
import FeatherIcon from "feather-icons-react";
import ScrollspyNav from "./Scrollspy";

// Import Logo
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
    // Binding toggle method
    this.toggle = this.toggle.bind(this);
  }

  // Toggle method to handle NavbarToggler click
  toggle() {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  }

  render() {
    let targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <Container>
          <Navbar
            expand="lg"
            fixed={this.props.top === true ? "top" : ""}
            className={this.props.navClass + " fixed-top navbar-custom sticky sticky-dark align-items-center"}
            id="navbar"
            container
          >
            <a className="logo me-3" href="/"> {/* Changed Link to <a> */}
              {this.props.imglight === true ? (
                <img src={logolight} alt="" height="30" />
              ) : (
                <img src={logodark} alt="" height="30" />
              )}
            </a>
            <NavbarToggler onClick={this.toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              id="navbarCollapse"
              isOpen={this.state.isOpenMenu}
              className=" navbar-collapse"
            >
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="800"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav className="navbar-nav navbar-center" id="navbar-navlist">
                  {this.props.navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink
                        className={item.navheading === "Home" ? "active" : ""}
                        href={"#" + item.idnm}
                      >
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                <ul className="list-inline ml-auto menu-social-icon mb-0 py-2 py-lg-0">
                  <li className="list-inline-item ml-0">
                    <a href="https://web.facebook.com/zyberloop" className="menu-social-link" target="_blank">
                      <FeatherIcon icon="facebook" className="icon-xs sw_1-5" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/zyberloop" className="menu-social-link">
                      <FeatherIcon icon="instagram" className="icon-xs sw_1-5" />
                    </a>
                  </li>
                  <li className="list-inline-item mr-0">
                    <a href="https://www.linkedin.com/company/101731208/" className="menu-social-link">
                      <FeatherIcon icon="linkedin" className="icon-xs sw_1-5" />
                    </a>
                  </li>
                </ul>
              </ScrollspyNav>
            </Collapse>
          </Navbar>
        </Container>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
