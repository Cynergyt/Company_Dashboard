import '../assets/styles/Sidebar.scss';
import IconHome from '../assets/img/IconHome.png'

function Sidebar(): JSX.Element {
    return(
        <div className="sidebar">
            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    
                    <a href="#" className="sidebar-link">
                        <img className="icon" src={IconHome} alt="" /> 
                        Home
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <img className="icon" src={IconHome} alt="" /> 
                        My Jobs
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <img className="icon" src={IconHome} alt="" /> 
                        Manage Candidates
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <img className="icon" src={IconHome} alt="" />
                        Interviews
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <img className="icon" src={IconHome} alt="" /> 
                        My projects
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <img className="icon" src={IconHome} alt="" /> 
                        Talent Request
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <img className="icon" src={IconHome} alt="" /> 
                        Skill Center
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <img className="icon" src={IconHome} alt="" /> 
                        HR Center
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <img className="icon" src={IconHome} alt="" /> 
                        Profile
                    </a>
                </li>


                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        
                        Logout
                    </a>
                </li>
            </ul>
      </div>
    )
}
export default Sidebar
