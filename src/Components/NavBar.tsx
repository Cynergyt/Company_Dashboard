import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ProfilePic from '../assets/img/profile-pic.png'
import NotifBell from '../assets/img/notif-bell.png'
import SettingButton from '../assets/img/setting.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Logo from '../assets/img/logo.png'
import '../assets/styles/Navbar.scss'

import Notification from './Notification'

interface NavBarProps {
    isPhoneMode: boolean;
    toggleSidebar: () => void;
  }

function NavBar({ isPhoneMode, toggleSidebar }: NavBarProps): JSX.Element {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (): void => {
        setIsOpen(!isOpen);
      };
    
    return(
        <div className='nav-bar'>
            <Navbar  expand="lg" >
                <Container fluid >
                     
                    <Navbar.Brand href="#home">
                        <div className='brand'>

                            {isPhoneMode && (
                                <FontAwesomeIcon className="icon" icon={faBars} onClick={toggleSidebar} />
                            )}
                            <div className="logo">
                                <img  src={Logo} alt="" /> 
                            </div>
                        </div>
                        
                        
                        
                    </Navbar.Brand>
                    <div className='profile-items'>
                        <div className='profile-item'> <img  className="icon-img" src={ProfilePic} alt="" />  </div>
                        <div className='profile-item'> <span> Babatunde Samuel </span> </div>
                        <div className='profile-item'> <img  className="icon-img" src={SettingButton} alt="" /> </div>
                        <div className='profile-item notif-dropdown' onClick={toggleDropdown}> <img  className="icon-img" src={NotifBell} alt="" /> 
                        {isOpen && (
                            <div className="notif-dropdown-menu" >
                                <Notification content='A new job opening for a Software Engineer position is now available. Review the job details and candidate requirements to proceed with the hiring process.'/> 
                                <Notification content='An interview has been scheduled with John Doe for the Software Engineer position. The interview is set to take place on Monday, July 10th at 10:00 AM. Please make the necessary preparations.'/> 
                                <Notification content='Please welcome Jane Smith, our newest team member. Jane has been onboarded as a Human Resources Specialist. Extend a warm welcome and assist with any necessary onboarding tasks.'/> 

                            </div>
                        )}
                        </div>
                        
                    </div>
                </Container>
                
            </Navbar>
           
                
        </div>
        
    )
}
export default NavBar


