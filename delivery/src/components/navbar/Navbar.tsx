import { HashLink } from 'react-router-hash-link';
import { GiHamburger } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from 'react';
import './Navbar.css';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleToggleMenu = (): void => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header>
            <HashLink className="logo" smooth to="/#home">
                <GiHamburger size={32} color='#8B4513' />Burguer House
            </HashLink>
            <nav className='navbar'>
                <HashLink smooth to="/#home">
                    Início
                </HashLink>
                <HashLink smooth to="/#cardapio">
                    Cardápio
                </HashLink>
                <HashLink smooth to="/#sobre">
                    Sobre
                </HashLink>
                <HashLink smooth to="/#contato">
                    Contato
                </HashLink>
            </nav>
            <div className='compras'>
                <HashLink className="btn btn-pedir" smooth to="/#cardapio">
                    <FaWhatsapp size={20} />Peça Agora
                </HashLink>
                <button type='button' onClick={handleToggleMenu} className='sacola'>
                    <FaShoppingBag color='var(--primary)' size={35} />
                </button>
            </div>
            {menuOpen && <div className="overlay" onClick={handleToggleMenu} />}
            <Sidebar isOpen={menuOpen} />
        </header>
    )
}

export default Navbar
