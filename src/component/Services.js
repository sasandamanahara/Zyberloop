import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

// Import Background Image
import Background from "../assets/images/service-icon-bg.png";
import Icon1 from "../assets/images/services-icon/icon-1.png";
import Icon2 from "../assets/images/services-icon/icon-2.png";
import Icon3 from "../assets/images/services-icon/icon-3.png";
import { Link } from "react-router-dom";

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb-5">
                  <h2 className="">Other Services</h2>
                  <p className="text-muted">We offer comprehensive solutions encompassing web and app development as well as digital marketing strategies to accelerate your business growth in the digital landscape.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <div className="card service-box text-center p-4">
                  <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon1} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">Life Time Support</h4>
                  <p className="service-subtitle mb-4 f-15">We provide lifetime support for our software services, ensuring that your systems continue to operate smoothly and efficiently long after implementation.</p>
                  
                </div>
              </Col>
              <Col lg={4}>
                <div className="card service-box text-center p-4">
                  <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon2} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">Hosting Services</h4>
                  <p className="service-subtitle mb-4 f-15">We provide reliable hosting and domain services for web applications, ensuring seamless performance and optimal online presence for your digital ventures.</p>
                 
                </div>
              </Col>
              <Col lg={4}>
                <div className="card service-box text-center p-4">
                  <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon3} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">Software Develpoment</h4>
                  <p className="service-subtitle mb-4 f-15">Our Software Development services provide tailored solutions to optimize your operations and drive innovation, empowering your business for success.</p>
                  
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
