import "./Sobre.css"

const Sobre = () => {
    return (
        <section id="sobre" className="sobre">
            <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&amp;h=500&amp;fit=crop" alt="Nossa cozinha" />
            <article>
                <h2>Nossa História</h2>
                <p>Desde 2025, o Rei da Chapa nasceu da paixão por hambúrgueres artesanais. Nosso segredo? Ingredientes selecionados e muito amor em cada preparo.</p>
                <ul>
                    <li><strong>Carne Fresca</strong> - 100% bovina selecionada</li>
                    <li><strong>Entrega Rápida</strong> - Máximo 40 minutos</li>
                    <li><strong>Pagamento Fácil</strong> - PIX, cartão ou dinheiro</li>
                </ul>
            </article>
        </section>
    )
}

export default Sobre
