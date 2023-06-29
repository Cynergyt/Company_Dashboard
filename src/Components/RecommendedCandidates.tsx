import Candidate from "./Candidate"
import '../assets/styles/RecommendedCandidates.scss'
import BagIcon from '../assets/img/bag-icon.png'
const CandidatesByGender: React.FC = () => {
    return (
        <div className='recommended-candidates' >
            <div className="title">
                Recommended Candidates
            </div>
            
            <div className='recommended-candidates-item' > 
                <Candidate role="UI/UX Designer" company="Cdlp Hub Ltd" city="Ibadan" location="On-site"/>
                <div className="icon-img"> <img src={BagIcon} alt="" /> <span style={{color: 'orange'}}> .... </span> </div>  
            </div>
            <div className='recommended-candidates-item' > 
                <Candidate role="UI/UX Designer" company="Cdlp Hub Ltd" city="Ibadan" location="On-site"/>
                <div className="icon-img"> <img src={BagIcon} alt="" /> <span style={{color: 'orange'}}> .... </span> </div>  
            </div>
            <div className='recommended-candidates-item' > 
                <Candidate role="UI/UX Designer" company="Cdlp Hub Ltd" city="Ibadan" location="On-site"/>
                <div className="icon-img"> <img src={BagIcon} alt="" /> <span style={{color: 'orange'}}> .... </span> </div>  
            </div>
            
            
        </div>
    )


}
export default CandidatesByGender