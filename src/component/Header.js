import {NavLink} from 'react-router-dom'
import logo from './../image/logo.png';

function Header()
{
    return (<>
    <div className="headerContainer">
        <img className="headerLogo" src={logo} alt=""/>
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/order">Order</NavLink>
        </nav>
    </div>
    </>)
}
export default Header;