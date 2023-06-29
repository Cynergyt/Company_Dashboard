import DoughnutChart from "./DoughnutChart"
import '../assets/styles/CandidatesByGender.scss'
const CandidatesByGender: React.FC = () => {
    return (
        <div className='candidates-by-gender' >
            <div> Candidates by Gender</div>
            <div className="doughnut-chart">
                <DoughnutChart/>
            </div>
            
        </div>
    )


}
export default CandidatesByGender