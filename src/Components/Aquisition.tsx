import ProgressBar from "./ProgressBar"
import '../assets/styles/Aquisition.scss'

const Acquisition: React.FC = () => {
    return (
        <div className='aquisition' >
            <div className="title"> Aquisition</div>
            <div className="aquisition-content">
                <div className="aquisition-conent-item"> 
                    <ProgressBar value={80} maxValue={100} title="Application" color="#0d75bc"/>
                </div>
               
                <div className="aquisition-conent-item"> 
                    <ProgressBar value={70} maxValue={100} title="Shortlisted" color="#F3723F"/>
                </div>

                <div className="aquisition-conent-item">
                    <ProgressBar value={90} maxValue={100} title="Rejected" color="red"/>
                </div>

                <div className="aquisition-conent-item"> 
                    <ProgressBar value={35} maxValue={100} title="Onhold" color="purple"/>
                </div>

                <div className="aquisition-conent-item"> 
                    <ProgressBar value={20} maxValue={100} title="Finalized" color="green"/>
                </div>
                
                
                
            </div>
            
            
        </div>
    )


}
export default Acquisition