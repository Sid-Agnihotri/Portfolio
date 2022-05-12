/** @format */

import React from "react";
import Azure from "../images/azure.svg";
import { Col, Row, Container, Card } from "react-bootstrap";
// import pdf from "../documents/Sidhant_Sharma_Dev.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Expertise.css";

const Expertise = () => {
	return (
		<Container className='expertise-section'>
			<Row>
				<Col>
					<div>
						<h2 className='expertise-heading'>EXPERTISE</h2>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xs={12} md={6}>
					<p className='expertise-section-heading'>
						<strong className='tx-primary'>My </strong> Background
					</p>
					<p className='passion-intro'>
						<small className='exp-intro-small'>
							Learning is what keeps the mind young.
						</small>
					</p>
				</Col>
				<Col xs={12} md={6}>
					<ul>
						<li>
							<a
								// href={pdf}
								href=''
								target='_blank'
								className='expertise-download-resume'>
								Download Resume
							</a>
						</li>
					</ul>
				</Col>
			</Row>

			<Row className='expertise-card-skill-container'>
				<Col>
					<Card className='expertise-card-1 '>
						<div className='exp-job-container'>
							<p className='exp-card-title'>CURRENT EMPLOYER</p>
							<h3 className='exp-job-title'>Full-Stack Developer</h3>
							<ul>
								<div className='expertise-job-link'>
									<li>Feb 2022 - Present | </li>
									<li>
										&nbsp;
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://www.mymoneykarma.com/'>
											MyMoneyKarma
										</a>
									</li>
								</div>
								<p className='exp-job-detail'>
									Working with the core development team to build India's most
									trusted and highly effective financial tools.
								</p>
							</ul>
						</div>
					</Card>
					<Card className='expertise-card-2 '>
						<div className='exp-job-container'>
							<h3 className='exp-job-title'>Front-End Developer</h3>
							<ul>
								<div className='expertise-job-link'>
									<li>Aug 2020 - Feb 2022 |</li>
									&nbsp;&nbsp;
									<li>
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://gamexchange.app/'
											className='indishine-container'>
											GameXChange
										</a>
									</li>
								</div>
								<p className='exp-job-detail'>
									Collaborating with a young team on the execution of ideas
									global gaming exchange for the movements of assets (NFT’s) and
									in-game currency across the gaming ecosystem.
								</p>
							</ul>
						</div>
					</Card>
				</Col>
				<Col container className='skill-container' xs={12} md={8}>
					<Row>
						<Card raised className='skill-cards'>
							<i
								style={{ color: "#62DAFB" }}
								className='fab fa-react fa-2x skill-icon'></i>
							<h3 className='skill-name'>React</h3>
						</Card>
						<Card raised className='skill-cards'>
							<i
								style={{ color: "#f7e01b" }}
								className='fab fa-js-square fa-2x skill-icon'></i>
							<h3 className='skill-name'>Javascript</h3>
						</Card>
						<Card raised className='skill-cards'>
							<i
								style={{ color: "#f16629" }}
								className='fab fa-html5 fa-2x skill-icon'></i>
							<h3 className='skill-name'>HTML/CSS</h3>
						</Card>
						<Card raised className='skill-cards'>
							<i
								style={{ color: "#207195" }}
								className='fab fa-wordpress fa-2x skill-icon'></i>
							<h3 className='skill-name'>WordPress</h3>
						</Card>
					</Row>
					<Row>
						<Card raised className='skill-cards'>
							<i
								style={{ color: "#7478ae" }}
								className='fab fa-php fa-2x skill-icon'></i>
							<h3 className='skill-name'>PHP</h3>
						</Card>
						<Card raised className='skill-cards'>
							<i
								style={{ color: "#5b8556" }}
								className='fab fa-node-js fa-2x skill-icon'></i>
							<h3 className='skill-name'>NodeJS</h3>
						</Card>
						<Card raised className='skill-cards'>
							<i
								style={{ color: "#C53635" }}
								className='fab fa-npm fa-2x skill-icon'></i>
							<h3 className='skill-name'>NPM</h3>
						</Card>
						<Card raised className='skill-cards'>
							<img
								alt='MongoDB'
								className='skill-icon'
								src='https://img.icons8.com/color/48/000000/mongodb.png'
							/>
							<h3 className='skill-name'>MongoDB</h3>
						</Card>
					</Row>
					<Row>
						<Card raised className='skill-cards'>
							<img
								alt='Mysql'
								className='skill-icon'
								src='https://img.icons8.com/color/48/000000/mysql-logo.png'
							/>
							<h3 className='skill-name'>MYSQL</h3>
						</Card>
						<Card raised className='skill-cards'>
							<img
								alt='Firebase'
								className='skill-icon'
								src='https://img.icons8.com/color/48/000000/firebase.png'
							/>
							<h3 className='skill-name'>Firebase</h3>
						</Card>
						<Card raised className='skill-cards'>
							<i
								style={{ color: "#C53635" }}
								className='fas fa-code-branch fa-2x skill-icon'></i>
							<h3 className='skill-name'>Git</h3>
						</Card>
						<Card raised className='skill-cards'>
							<i
								style={{ color: "#2491E5" }}
								className='fab fa-docker fa-2x skill-icon'></i>
							<h3 className='skill-name'>Docker</h3>
						</Card>
					</Row>
					<Row>
						<Card raised className='skill-cards'>
							<i
								style={{ color: "#f7e01b" }}
								className='fab fa-aws fa-2x skill-icon'></i>
							<h3 className='skill-name'>AWS</h3>
						</Card>
						<Card raised className='skill-cards'>
							<i
								style={{ color: "#0080FF" }}
								className='fab fa-digital-ocean fa-2x skill-icon'></i>
							<h3 className='skill-name'>Digital Ocean</h3>
						</Card>
						<Card raised className='skill-cards'>
							<img
								alt='Azure'
								style={{ color: "#4C6EF5" }}
								className='skill-icon'
								src='https://img.icons8.com/color/48/000000/azure-1.png'
							/>
							<h3 className='  skill-name'>Azure</h3>
						</Card>
						<Card raised className='skill-cards'>
							<i
								src={Azure}
								style={{ color: "#4C95D9" }}
								className='fas fa-network-wired fa-2x skill-icon'></i>

							<h3 className='skill-name'>Network</h3>
						</Card>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Expertise;

// <Row>
//   {skills.map((skill) => {
//     return (
//       <Col>
//         <Card raised className="skill-cards">
//           <i
//             style={{ color: `${skill.color}` }}
//             className={`${skill.type} fa-${skill.icon} fa-2x skill-icon`}
//           ></i>

//           <h3 className="skill-name"> {skill.name}</h3>
//         </Card>
//       </Col>
//     );
//   })}
// </Row>;
