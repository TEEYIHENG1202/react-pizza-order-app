import {NavLink} from 'react-router-dom'
import logo from './../image/logo.png';

function Header()
{
    return (<>
    <header>
        <img className="headerLogo" src={logo} alt="Pizza"/>
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/order">Order</NavLink>
        </nav>
    </header>
    </>)
}
export default Header;