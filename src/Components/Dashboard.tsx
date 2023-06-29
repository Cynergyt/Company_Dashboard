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
function Dashboard(): JSX.Element {
    return(
        <div className='dashboard'>
            <NavBar/>
            <Container>
                
                <Row>
                    <Col lg={2}><Sidebar/></Col>
                    
                    <Col>
                        <div className='greetings'>
                            Welcome, Babatunde Samuel    
                        </div>
                    
                        <Row >

                            <Col className='col' lg={3}>
                                <InfoComponent
                                    title="Job Postings"
                                    number={10}
                                    seemore="View All"
                                    percentage={74}
                                /> 
                                
                            </Col>
                            <Col lg={3}>
                                <InfoComponent
                                    title="Number of Applications"
                                    number={60}
                                    seemore="View All "
                                    percentage={74}
                                />
                            </Col>
                            <Col lg={3}>
                                <InfoComponent
                                    title="New Candidates to Review "
                                    number={6}
                                    seemore="View All"
                                    percentage={74}
                                /> 
                            </Col>
                            <Col lg={3}>
                                <InfoComponent
                                    title="Number of Candidates Hired "
                                    number={6}
                                    seemore="View All"
                                    percentage={74}
                                /> 
                            </Col>
                        </Row>
                        
                
                         

                        
                    
                        
                             
                        <Row>
                            <Col lg={8}> 
                                    
                                <Row> <Col> <JobStatistics/> </Col>  </Row>
                                
                                <Row> 
                                    <Col> <CandidatesByGender/> </Col>
                                    
                                    <Col> <Acquisition/> </Col>
                                </Row>
                            </Col>
                            <Col> Recommended Candidates</Col>
                        </Row>
                    </Col>
                    
                  
                </Row>
             
            </Container>
        </div>
        
    )
        
}
export default Dashboard;
