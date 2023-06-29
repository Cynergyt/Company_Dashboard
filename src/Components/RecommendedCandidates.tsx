import Candidate from "./Candidate"
import '../assets/styles/RecommendedCandidates.scss'
const CandidatesByGender: React.FC = () => {
    return (
        <div className='recommended-candidates' >
            <div className="title">
                Recommended Candidatessss
            </div>
            
            <div className='recommended-candidates-item' > 
                <Candidate role="UI/UX Designer" company="Cdlp Hub Ltd" city="Ibadan" location="On-site"/>
            </div>
            <div className='recommended-candidates-item' > 
                <Candidate role="UI/UX Designer" company="Cdlp Hub Ltd" city="Ibadan" location="On-site"/>
            </div>
            <div className='recommended-candidates-item'> 
                <Candidate role="UI/UX Designer" company="Cdlp Hub Ltd" city="Ibadan" location="On-site"/>
            </div>
            
            
        </div>
    )


}
export default CandidatesByGender