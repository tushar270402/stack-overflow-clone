import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../src/assets/logo-stackoverflow.png'
import search from  '../../src/assets/magnifying-glass-solid.svg'
import Avatar from './Avatar.jsx'

export default function Navbar() {

    var User = null;

    return (
        <nav className='main-nav'>
            <div className="navbar">
                <Link to='/' className='nav-item nav-logo'>
                    <img className='logo' src={logo} />
                </Link>
                <Link to='/about' className='nav-item nav-btn'>About</Link>
                <Link to='/products' className='nav-item nav-btn'>Products</Link>
                <Link to='/forteams' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type='text' placeholder='Search...'></input>
                    <img src={search} alt='search' width="18" className='search-icon'/>
                </form>
                {
                    User === null ? 
                    <Link to='/Auth' className='nav-item nav-links'>Log In</Link> :
                    <>
                        <Avatar backgroundColor={'#009dff'} px={'10px'} py={'7px'} borderRadius={"50px"} color={"white"}><Link to='/' style={{color: "white", textDecoration: "none"}}>T</Link></Avatar>
                        <button className=' nav-item nav-links'>Log Out</button>
                    </>
                }
            </div>
        </nav>
    )
}