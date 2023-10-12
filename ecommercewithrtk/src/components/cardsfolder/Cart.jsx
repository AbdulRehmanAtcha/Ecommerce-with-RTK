import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  decrement,
  deleteProduct,
  getCartTotal,
  increment,
} from "../../features/mySlice";
import numeral from "numeral";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector((data) => data.name);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);
  return (
    <>
      {cart.length === 0 ? (
        <div
          style={{
            minHeight: "90vh",
            marginTop: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src="https://i.imgur.com/dCdflKN.png" alt="" />
          <h2>Your Cart Is Empty</h2>
          <h2>Add Products To Make Me Happy</h2>
          <NavLink to={"/"}>
            <MDBBtn block size="lg" className="mt-3">
              Continue Shopping
            </MDBBtn>
          </NavLink>
        </div>
      ) : (
        <section className="bg-dark" style={{ minHeight: "100vh" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center my-4">
              <MDBCol md="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    {cart.map((eachProduct, index) => (
                      <MDBRow>
                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                          <MDBRipple
                            rippleTag="div"
                            rippleColor="light"
                            className="bg-image rounded hover-zoom hover-overlay"
                          >
                            <img
                              src={eachProduct.imgLink}
                              alt="Product Pic"
                              className="w-100"
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </a>
                          </MDBRipple>
                        </MDBCol>

                        <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                          <p>
                            <strong>
                              {eachProduct.name} (x{eachProduct.quantity})
                            </strong>
                          </p>

                          <button
                            onClick={() => dispatch(deleteProduct(eachProduct))}
                            style={{
                              backgroundColor: "#386BC0",
                              width: "45px",
                              borderRadius: "4px",
                              border: "none",
                              height: "35px",
                            }}
                          >
                            <MDBIcon fas icon="trash" color="white" />
                          </button>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <button
                              style={{
                                backgroundColor: "#386BC0",
                                width: "45px",
                                borderRadius: "4px",
                                border: "none",
                                height: "35px",
                                marginRight:"10px"
                              }}
                              onClick={() => dispatch(decrement(eachProduct))}
                            >
                              <MDBIcon fas icon="minus" color="white" />
                            </button>
                            <button
                              style={{
                                backgroundColor: "#386BC0",
                                width: "45px",
                                borderRadius: "4px",
                                border: "none",
                                height: "35px",
                              }}
                              onClick={() => dispatch(increment(eachProduct))}
                            >
                              <MDBIcon fas icon="plus" color="white" />
                            </button>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>
                              {numeral(eachProduct.price).format("0,0.00")}
                            </strong>
                          </p>
                        </MDBCol>
                      </MDBRow>
                    ))}

                    <hr className="my-4" />
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody>
                    <p>
                      <strong>We accept</strong>
                    </p>
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                      alt="PayPal acceptance mark"
                    />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-4">
                  <MDBCardHeader>
                    <MDBTypography tag="h5" className="mb-0">
                      Summary
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBListGroup flush>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>PKR: {numeral(totalPrice).format("0,0.00")}</span>
                      </MDBListGroupItem>
                    </MDBListGroup>

                    <MDBBtn block size="lg" className="mt-3">
                      Go to checkout
                    </MDBBtn>
                    <NavLink to={"/"}>
                      <MDBBtn block size="lg" className="mt-3">
                        Continue Shopping
                      </MDBBtn>
                    </NavLink>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      )}
    </>
  );
}
