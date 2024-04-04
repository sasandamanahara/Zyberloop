import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import hero3 from "../../assets/images/hero-3-bottom-img.png";

// Import Background Image
import { Link } from "react-router-dom";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-3-bg position-relative bg-soft-primary" id="home">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
              <div className="text-center">
                <h1 className="hero-3-title text-dark line-height-1_4">Scale up Your Business to Meet New Heights</h1>
                <p className="text-muted mb-4 pb-3">Experience exponential growth with Zyberloop's innovative web development solutions. From captivating designs to seamless functionality, our services are designed to propel your business forward. Expand your reach, engage your audience, and achieve your goals with Zyberloop. Let's shape the future of your business together.</p>
                <a href="https://wa.link/uvs73x" className="btn btn-success">Send Us a Message <span className="ml-2 right-icon">&#8594;</span></a>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="hero-bottom-shape">
          <img src={hero3} alt="" className="img-fluid d-block mx-auto" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
