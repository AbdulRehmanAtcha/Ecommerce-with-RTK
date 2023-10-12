import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import "./navbar.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  const { cart } = useSelector((data) => data.name);

  return (
    <MDBNavbar
      expand="lg"
      className="fixed-top"
      style={{ backgroundColor: "black" }}
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="#" style={{ color: "white" }}>
          <img
            src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/968/8639054968_74b0afe5-14da-4bba-b858-08fb7807eae7.png?cb=1697099780"
            alt="Logo"
            style={{ height: "45px" }}
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                href="#"
              ></MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink href="#">Link</MDBNavbarLink>
            </MDBNavbarItem> */}

            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}

            {/* <MDBNavbarItem>
              <MDBNavbarLink
                disabled
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem> */}
          </MDBNavbarNav>
          <NavLink to="/cart">
            <Button variant="light" className="cart-button">
              Cart{" "}
              <Badge bg="transparent" className="button-badge">
                {cart.length}
              </Badge>
            </Button>
          </NavLink>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
