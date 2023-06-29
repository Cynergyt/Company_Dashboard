import '../assets/styles/InfoComp.scss'
import AddDoc from '../assets/img/addDoc.png'

import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
interface InfoComponentProps {
    title: string;
    number: number;
    seemore: string;
    percentage: number;
  }
const InfoComponent: React.FC<InfoComponentProps> = ({
    title,
    number,
    seemore,
    percentage,
  }) => {
    return(
        <div className='info-comp'>
          
            <div className='icon'>
                <img  className="icon" src={AddDoc} alt="" /> 
            </div>
            
            <div className='content'>
                <div className='title' > {title} </div>
                <div className='number'> {number} </div>
                <div className='seemore'> {seemore} </div>
            </div>
           
            
        
            <div className='progress-bar'>
                <CircularProgressbar value={percentage}
                    text={`+${percentage}%`}
                    styles={buildStyles({
                        rotation: 0.5,
                        textColor: '#f88',
                        })}
                />
            
            </div>
            
           

        </div>
    )
}
export default InfoComponent