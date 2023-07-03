import '../assets/styles/NotificationComp.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
interface NotificationProps {
    content: string;
  }

function Notification ({ content }: NotificationProps): JSX.Element {
    return(
        <div className="notification-comp">
            <div className='notif-icon'><FontAwesomeIcon icon={faComment}/> </div> 
            <div className='content'> {content} </div>
        </div>
    )
}

export default Notification