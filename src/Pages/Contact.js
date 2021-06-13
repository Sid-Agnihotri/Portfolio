import React,{useState} from "react";
import "../styles/Contact.css";
import {
  Col,
  Row,
  Container,

  Card,
  Form,

} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {db} from "../firebase";
function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [submitted, setSubmitted] = useState(false)


  const handleSubmit = (e) =>{
    e.preventDefault()

    db.collection('contacts').add({
      name:name,
      email:email,
      message:message
    }).then(() =>{
      setSubmitted(true)
    }).catch(err =>{
      console.log(err.message)
    })
    setName('')
    setEmail('')
    setMessage('')

  }
  return (
    <Container className="contact" id="contact">
      <Row>
        <Col>
          <h2 className="contact-heading">CONTACT</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="contact-section-intro">
            <strong className="tx-primary">Let's</strong> get in touch
          </p>
        </Col>
      </Row>
      <Row className="contact-cards">
        <Col className="contact-card-container">
          <Card className="contact-grid">
            <ul>
              <li>
                <a href="tel:4389279098" className="call-button">
                  Call Me<i class="fas fa-arrow-right"></i>
                </a>
                <div className="contact-card-icon">
                  <span>
                    <i
                      style={{ color: "#5BC34D" }}
                      className="fas fa-phone-alt"
                    ></i>
                  </span>
                </div>
                <div className="contact-card-title">Phone/Whatsapp</div>
                <p>
                  <p> +1(438)927-9098</p>
                </p>
              </li>
            </ul>
          </Card>
        </Col>
        <Col className="contact-card-container">
          <Card className="contact-grid contact-email">
            <ul>
              <li>
                <a
                  href="mailto:sharma.sidhant@outlook.com"
                  className="email-button"
                >
                  Send a Mail<i class="fas fa-arrow-right"></i>
                </a>
                <div className="contact-card-icon">
                  <span>
                    <i className="fas fa-at"></i>
                  </span>
                </div>
                <div className="contact-card-title">Email</div>
                <p>
                  <p>sharma.sidhant@outlook.com</p>
                </p>
              </li>
            </ul>
          </Card>
        </Col>
        <Col className="contact-card-container">
          <Card raised className="contact-grid">
            <ul>
              <li>
                <div className="contact-card-icon">
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                </div>
                <div className="contact-card-title">Skype</div>
                <p>
                  <a href="skype:sharma.sidhant?call"> Sid.Agnihotri</a>
                </p>
              </li>
            </ul>
          </Card>
        </Col>
        <Col className="contact-card-container">
          <Card raised className="contact-grid">
            <a href="#">
              <ul>
                <li>
                  <div className="contact-card-icon">
                    <span>
                      <i
                        style={{ color: "#5BC34D" }}
                        class="fab fa-linkedin-in "
                      ></i>
                    </span>
                  </div>
                  <div className="contact-card-title">LinkedIn</div>
                  <p>
                    <a href="https://www.linkedin.com/in/sidhant-sharma-21a79325/">
                      Sid Sharma
                    </a>
                  </p>
                </li>
              </ul>
            </a>
          </Card>
        </Col>
      </Row>
      {/* seprator */}
      <Row container xs={12} direction="row" className="contact-seprator">
        <Col>
          <span>
            <b className="tx-primary or-seprator">OR</b>
            <div className="seprator"></div>
          </span>
        </Col>
      </Row>
      {/* Form from here */}
      <Row>
        <Col item container md={7} className="form-container">
          <Form onSubmit={handleSubmit} className="form">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-name-field"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="form-email-field"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1" className="form-text">
              <Form.Control
                as="textarea"
                className="form-text-field"
                rows={4}
                placeholder="Enter message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Form.Row className="form-btn-container">
              <Form.Group as={
                Col}>
                <button type="submit" className="form-submit-btn">
                  Send Message <i class="fas fa-arrow-right"></i>
                </button>
              </Form.Group>
              <Form.Group as={Col}>
                {submitted ? (
                  <h3 className="form-submit-complete">Submitted!</h3>
                ) : null}
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
        <Col md={3} className="live-chat-container">
          <Card className="live-chat-card">
            <span>
              <i className="fas fa-comments fa-3x"></i>
              <p className="live-chat">Live Chat</p>
            </span>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;



  // transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;