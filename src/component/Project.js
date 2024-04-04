import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

import Img1 from "../assets/images/project/img-1.png";
import Img2 from "../assets/images/project/img-2.png";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          img: Img1,
          title: 'Pearlx.lk',
          designation: 'Tour Agency',
          link: 'https://pearlx.lk/'
        },
        {
          id: 2,
          img: Img2,
          title: 'Schoolpaperbank.lk',
          designation: 'Book Store',
          link: 'https://schoolpaperbank.lk/'
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="project">
          <Container>
            <Row className="justify-content-center">
              <div className="col-lg-7">
                <div className="text-center mb-5">
                  <h2 className="">Our Latest Project</h2>
                  <p className="text-muted">Explore our latest projects showcasing innovative web and app developments, alongside successful digital marketing campaigns tailored to drive engagement and growth for our diverse range of clients.</p>
                </div>
              </div>
            </Row>
            <Row>
              {this.state.projects.map((item, key) => (
                <Col lg={4} md={6} key={key}>
                  <div className="project-box mb-4">
                    <div className="position-relative overflow-hidden rounded">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <img src={item.img} alt="" className="img-fluid d-block mx-auto shadow" />
                      </a>
                      <div className="project-overlay">
                        <div className="project-content">
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <div className="project-icon">
                              <i>
                                <FeatherIcon icon="eye" />
                              </i>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="f-17 mb-1">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-dark">{item.title}</a>
                      </h4>
                      <p className="text-muted">{item.designation}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
