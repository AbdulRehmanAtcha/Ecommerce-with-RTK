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
    <Navbar className="bg-danger fixed-top">
      <Container>
        <Navbar.Brand href="#home" text="light">
          Navbar with text
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
