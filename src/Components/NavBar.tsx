import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProfilePic from '../assets/img/profile-pic.png'
import NotifBell from '../assets/img/notif-bell.png'
import SettingButton from '../assets/img/setting.png'


import Logo from '../assets/img/logo.png'
import '../assets/styles/Navbar.scss'
function NavBar(): JSX.Element {
    return(
        <div className='nav-bar'>
            <Navbar  expand="lg" >
                <Container >
                    <Navbar.Brand href="#home"> 
                        <img className="logo" src={Logo} alt="" /> 
                        
                    </Navbar.Brand>
                    <div className='profile-items'>
                        <div className='profile-item'> <img  className="icon-img" src={ProfilePic} alt="" />  </div>
                        <div className='profile-item'> <span> Babatunde Samuel </span> </div>
                        <div className='profile-item'> <img  className="icon-img" src={SettingButton} alt="" /> </div>
                        <div className='profile-item'> <img  className="icon-img" src={NotifBell} alt="" /> </div>
                    </div>
                </Container>
            </Navbar>
        </div>
        
    )
}
export default NavBar


