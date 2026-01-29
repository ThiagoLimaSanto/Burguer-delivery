import { HashLink } from 'react-router-hash-link'
import { FaWhatsapp } from "react-icons/fa";
import './Home.css'

const Home = () => {
    return (
        <section id="home" className="hero-wrapper">
            <article className="hero">
                <div>
                    <h1>O Melhor Hamburguer da Cidade</h1>
                    <p>Igredientes fescos, receitas especiais e entrega rápida. Peça agora e receba em até 55 minutos!</p>
                    <div className='hero-buttons'>
                        <HashLink id="/#cardapio" className="btn" smooth to="/#cardapio">
                            Ver Cardápio
                        </HashLink>
                        <a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            <FaWhatsapp className='whats' color='green' /> WhatsApp
                        </a>
                    </div>
                    <ul className='hero-stats'>
                        <li>
                            <strong>+500</strong> Clientes felizes
                        </li>
                        <li>
                            <strong>4.9</strong> Avaliação
                        </li>
                        <li>
                            <strong>40min</strong> Ou seu dinheiro de volta
                        </li>
                    </ul>
                </div>
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hamburguer" />
            </article>
        </section>
    )
}

export default Home
