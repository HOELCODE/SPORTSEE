import '../css/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <nav className="nav">
                <ul>
                    <li>Acceuil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;