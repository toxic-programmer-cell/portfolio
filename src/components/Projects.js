import { Container, Row, Col } from "react-bootstrap";
import { Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../images/color-sharp2.png";
import projImg1 from "../images/project-img1.png";
import projImg2 from "../images/project-img2.png";
import projImg3 from "../images/project-img3.png";
import '../css/Projects.css';
import '../App.css';

export const Projects = () => {

    const projects = [
        {
            title: "E-Commerce Website",
            description: "Designed and developed an e-commerce website using React and Redux.",
            imgUrl: projImg1,
        },
        {
            title: "weather App",
            description: "Designed and development",
            imgUrl: projImg2,
        },
        {
            title: "Portfolio",
            description: "Designed and developed",
            imgUrl: projImg3,
        }
    ]
    return(
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Project</h2>
                        <p>"Developed solutions with React.js, JavaScript specializing in building scalable web applications and integrating APIs, delivering enhanced user experiences and optimized performance."</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">loream ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">loream ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
};