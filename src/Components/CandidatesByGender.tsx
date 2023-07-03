import DoughnutChart from "./DoughnutChart"
import '../assets/styles/CandidatesByGender.scss'
const CandidatesByGender: React.FC = () => {
    return (
        <div className='candidates-by-gender' >
            <div className="title"> Candidates by Gender</div>
            <div className='gender-content'> 
                <div className="doughnut-chart">
                    <DoughnutChart/>
                    
                </div>
                
                <div className="all-legend"> 
                    <div className="legend"> 
                        <div
                            className="dot"
                            style={{ backgroundColor: '#0D75BC', width: '10px', height: '10px', borderRadius: '50%', marginRight: '10px' }}
                        ></div><div className='text'> Male </div>
                    </div>
                    <div className="legend">
                        <div
                            className="dot"
                            style={{ backgroundColor: '#F3723F', width: '10px', height: '10px', borderRadius: '50%', marginRight: '10px'}}
                        ></div> <div className='text'> Female </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
export default CandidatesByGender