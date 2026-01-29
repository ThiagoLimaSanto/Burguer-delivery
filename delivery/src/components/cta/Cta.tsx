import { FaWhatsapp } from "react-icons/fa";
import './Cta.css'

const Cta = () => {
    return (
        <section id="cta" className='cta'>
            <h2>Bateu a Fome?</h2>
            <p>Faça seu pedido agora e receba em casa!</p>
            <a href="https://wa.me/5511999999999" target="_blank" className="btn btn-light"><FaWhatsapp color="green" />Pedir pelo WhatsApp</a>
        </section>
    )
}

export default Cta
