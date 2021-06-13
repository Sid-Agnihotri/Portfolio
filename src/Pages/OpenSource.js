import React from "react";

import { Col, Row, Container, Card } from "react-bootstrap";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/OpenSource.css";
function OpenSource() {
  return (
    <Container className="os">
      <Row>
        <Col>
          <div>
            <h2 className="os-heading">OPEN-SOURCE</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <p className="os-section-heading">
            <strong className="tx-primary">My </strong> Projects
          </p>
        </Col>
        <Col md={4}>
          <ul>
            <li>
              <Link
                className="os-collabrate"
                smooth="easeInOutQuint"
                duration={2000}
                to="contact"
              >
                Collabrate
              </Link>
            </li>
          </ul>
        </Col>
      </Row>

      <div className="os-container">
        <Row className="os-card-container">
          <Col lg={4} xs={12} className="os-col">
            <Card raised className="os-card-1">
              <div className="os-projects-text">
                <a href="https://ignite-4a52c.web.app/">
                  <h4 className="os-card-heading">Ignite</h4>
                </a>

                <p className="os-card-text">
                  Like IMDB for movies, we got Ignite for the games. Shows
                  Upcoming, Popular & New Games. <br></br>
                  <hr
                    className="hr-line"
                    style={{
                      color: "#383C3E",
                      backgroundColor: "#383C3E",
                      height: 0.5,
                    }}
                  />
                  Used: React, Redux, Rawg.io API, Axios, MaterialUI and much
                  more.
                </p>
                <a
                  href="https://github.com/Sid-Agnihotri/Ignite-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Git
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-demo"
                  href="https://ignite-4a52c.web.app/"
                >
                  Live
                </a>
              </div>
            </Card>
          </Col>
          <Col lg={4} xs={12} className="os-col">
            <Card className="os-card-2 ">
              <div className="os-projects-text">
                <h4 className="os-card-heading">COVID-19 Tracker</h4>
                <p className="os-card-text">
                  Web Application to provide live coverage of COVID-19 cases
                  accross the globe.
                  <hr
                    className="hr-line"
                    style={{
                      color: "#383C3E",
                      backgroundColor: "#383C3E",
                      height: 0.5,
                    }}
                  />
                  Used: React, Redux, WHO API, Axios, MaterialUI, ChartJS and
                  much more.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Sid-Agnihotri/Covid-19-Tracker"
                >
                  Visit Git
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-demo"
                  href="https://covid-tracker-2019s.web.app/"
                >
                  Live
                </a>
              </div>
            </Card>
          </Col>
          <Col lg={4} xs={12} className="os-col">
            <Card className="os-card-3">
              <div className="os-projects-text">
                <h4 className="os-card-heading">Tasty</h4>
                <p className="os-card-text">
                  Recipe Application powered by React, ExpressJS, NodeJS, &
                  MongoDB. Also, has a custom build React Library for uploading
                  files.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Sid-Agnihotri"
                >
                  Visit Git
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default OpenSource;


              