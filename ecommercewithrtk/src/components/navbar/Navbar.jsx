import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../features/mySlice";
import { NavLink } from "react-router-dom";

function TextLinkExample() {
  const { cart } = useSelector((data) => data.name);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);
  return (
    <Navbar className="fixed-top" style={{ backgroundColor: "#141c33" }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          <img
            src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/2/8637224002_7dc2eb6a-6e02-4673-9e2d-f554e56133ae.png?cb=1697021985"
            alt="Logo"
            height={"50px"}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink to={"/cart"}>
            <Navbar.Text>
              <Button variant="light">
                Cart
                <Badge bg="light" text="dark">
                  {cart.length}
                </Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Navbar.Text>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
