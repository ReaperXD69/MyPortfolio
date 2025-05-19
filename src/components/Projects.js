import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import s23 from "../assets/img/Screenshot (23).png";
import s22 from "../assets/img/Screenshot (22).png";
import s24 from "../assets/img/Screenshot (24).png";
import s25 from "../assets/img/Screenshot (25).png";
import s26 from "../assets/img/Screenshot (26).png";
import s27 from "../assets/img/Screenshot (27).png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Demo App",
      description: "Design & Development",
      imgUrl: s23,
    },
    {
      title: "Demo App",
      description: "Design & Development",
      imgUrl: s22,
    },
    {
      title: "Demo App",
      description: "Design & Development",
      imgUrl: s24,
    },
    {
      title: "Demo Website",
      description: "Design & Development",
      imgUrl: s27,
    },
    {
      title: "Demo Website",
      description: "Design & Development",
      imgUrl: s25,
    },
    {
      title: "Demo Website",
      description: "Design & Development",
      imgUrl: s26,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I’ve worked on impactful projects like Moodify, a mental health journaling app built using Flutter, Firebase, FastAPI, and Hume AI, which allows users to log reflections, get sentiment analysis, and view emotional insights through interactive analytics. Another project is hMovies, a responsive movie discovery website built with React.js and the TMDB API, where users can browse movies, search by genres, and manage a personalized watchlist, all deployed via GitHub Pages. These projects showcase my skills in both frontend and backend development across web and mobile platforms.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
