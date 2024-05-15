import '../LeftSidebar/LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/globe-solid.svg'
import '../LeftSidebar/LeftSidebar.css'

export default function LeftSidebar() {
    
    return (
        <div className='Left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeClassName='active'>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>Public</p></div>
                    <NavLink to='/Questions' className='side-nav-links' activeClassName='active' style={{ paddingLeft: "40px" }}>
                        <img src={Globe} className='globe' alt='globe'></img>
                        <p style={{paddingLeft: "10px"}}>Questions</p>
                    </NavLink>
                    <NavLink to='/tags' className='side-nav-links' style={{ paddingLeft: "40px" }} activeClassName='active' >
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' style={{ paddingLeft: "40px" }} activeClassName='active' >
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}