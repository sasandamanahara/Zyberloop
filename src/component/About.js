import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// Import Background Image
import Img1 from "../assets/images/about/img-1.jpg";
import Img2 from "../assets/images/about/img-2.jpg";

//import icon
import FeatherIcon from "feather-icons-react";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb-5">
                  <h2 className="">About Us</h2>
                  <p className="text-muted">We are committed to supporting the growth of your business through our services.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <h2 className="fw-normal line-height-1_4 mb-4">Software Development & Digital Marketing <span className="fw-medium">Services</span></h2>
                <p className="text-muted mb-4">We offer app and web development, social media marketing, and software solutions to drive your business growth</p>
                <p className="f-17 text-muted"><FeatherIcon className="icon-xs text-primary icon-fill-primary icon mr-2" icon="grid" />   Web & App Development</p>
                <p className="f-17 text-muted"><FeatherIcon className="icon-xs text-primary icon-fill-primary icon mr-2" icon="layout" />   Software Solutions</p>
                <p className="f-17 text-muted mb-4"><FeatherIcon className="icon-xs text-primary icon-fill-primary icon mr-2" icon="monitor" />   Digital Marketing & Advertising Services</p>
                
              </Col>
              <Col lg={4}>
                <div className="card border-0">
                  <div className="bg-soft-primary about-img rounded">
                  <img src={Img1} alt="" className="img-fluid d-block mx-auto" />
                  </div>
                  <div className="mt-3">
                    <p className="text-uppercase text-muted mb-2 f-13">Development</p>
                    <h4 className="f-18">Web & App Development</h4>
                    <p className="text-muted">Unlock your digital potential with our expert Web and App development services. From captivating websites to innovative mobile applications, we craft tailored solutions to elevate your online presence and drive success in the digital realm.</p>
                    
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="card border-0">
                  <div className="bg-soft-info about-img rounded">
                    <img src={Img2} alt="" className="img-fluid d-block mx-auto" />
                  </div>
                  <div className="mt-3">
                    <p className="text-uppercase text-muted mb-2 f-13">Marketing</p>
                    <h4 className="f-18"> Digital Marketing Services</h4>
                    <p className="text-muted">Elevate your brand's online visibility and engagement with our dynamic Digital Marketing services. From targeted social media campaigns to strategic SEO strategies, we leverage the power of digital platforms to boost your reach, drive traffic, and maximize your business growth potential.</p>
                    
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
