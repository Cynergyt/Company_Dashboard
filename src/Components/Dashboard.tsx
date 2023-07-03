import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/styles/Dashboard.scss';
import InfoComponent from './JobPostingComponent';
import JobStatistics from './JobStatistics';
import CandidatesByGender from './CandidatesByGender';
import Acquisition from './Aquisition';
import RecommendedCandidates from './RecommendedCandidates';
// import HamburgerMenu from './HamburgerMenu';

function Dashboard(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPhoneMode, setIsPhoneMode] = useState(false);

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = (): void => {
      setIsPhoneMode(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="dashboard">
      
      <NavBar  isPhoneMode={isPhoneMode} toggleSidebar={toggleSidebar} />
      
      <Container fluid>
        
        <Row>
            {(!isPhoneMode  || isSidebarOpen) &&
            <Col lg={2} >
                <Sidebar />
            </Col>
            }
            <Col>
                <div className="greetings">
                <div className="greetings-content">Welcome, Babatunde Samuel</div>
                <div>
                    <button className="post-job-button">Post jobs</button>
                </div>
                </div>

                <Row>
                <Col className="job-posting-comps" lg={3}>
                    <InfoComponent title="Job Postings" number={10} seemore="View All" percentage={74} />
                </Col>
                <Col className="job-posting-comps"  lg={3}>
                    <InfoComponent
                    title="Number of Applications"
                    number={60}
                    seemore="View All"
                    percentage={74}
                    />
                </Col>
                <Col className="job-posting-comps" lg={3}>
                    <InfoComponent title="New Candidates to Review" number={6} seemore="View All" percentage={74} />
                </Col>
                <Col className="job-posting-comps"  lg={3}>
                    <InfoComponent title="Number of Candidates Hired" number={6} seemore="View All" percentage={74} />
                </Col>
                </Row>

                <Row>
                    <Col className="order-2 order-lg-1" lg={8}>
                        <Row>
                        <Col>
                            <JobStatistics />
                        </Col>
                        </Row>

                        <Row>
                        <Col lg={6}>
                            <CandidatesByGender />
                        </Col>

                        <Col lg={6}>
                            <Acquisition />
                        </Col>
                        </Row>
                    </Col>
                    <Col className="order-1 order-lg-2">
                        <RecommendedCandidates />
                    </Col>
                </Row>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;