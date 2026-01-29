import { FaShoppingCart } from "react-icons/fa";
import "./Cardapio.css"

const Cardapio = () => {
    return (
        <section id="cardapio" className="cardapio">
            <h2>Nosso Cardápio</h2>
            <p>Escolha seu favorito e faça seu pedido pelo WhatsApp</p>

            <ul className="menu-grid">
                <li>
                    <img src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&amp;h=300&amp;fit=crop" alt="Burger Clássico" />
                    <span className="badge">Mais Vendido</span>
                    <h3>Burger Clássico</h3>
                    <p>Pão brioche, 180g de carne, queijo cheddar, alface, tomate e molho especial</p>
                    <strong>R$ 28,90</strong>
                    <a href="https://wa.me/5511999999999?text=Olá! Gostaria de pedir um Burger Clássico" target="_blank" className="btn btn-pedir"><FaShoppingCart />Pedir</a>
                </li>

                <li>
                    <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&amp;h=300&amp;fit=crop" alt="Burger Bacon" />
                    <h3>Burger Bacon</h3>
                    <p>Pão brioche, 180g de carne, bacon crocante, queijo, cebola caramelizada</p>
                    <strong>R$ 34,90</strong>
                    <a href="https://wa.me/5511999999999?text=Olá! Gostaria de pedir um Burger Bacon" target="_blank" className="btn btn-pedir"><FaShoppingCart />Pedir</a>
                </li>

                <li>
                    <img src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&amp;h=300&amp;fit=crop" alt="Burger Duplo" />
                    <span className="badge hot">Novidade</span>
                    <h3>Burger Duplo</h3>
                    <p>Pão brioche, 2x 180g de carne, dobro de queijo, bacon e molho barbecue</p>
                    <strong>R$ 42,90</strong>
                    <a href="https://wa.me/5511999999999?text=Olá! Gostaria de pedir um Burger Duplo" target="_blank" className="btn btn-pedir"><FaShoppingCart />Pedir</a>
                </li>

                <li>
                    <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&amp;h=300&amp;fit=crop" alt="Burger Veggie" />
                    <h3>Burger Veggie</h3>
                    <p>Pão integral, hambúrguer de grão de bico, queijo, rúcula e maionese verde</p>
                    <strong>R$ 32,90</strong>
                    <a href="https://wa.me/5511999999999?text=Olá! Gostaria de pedir um Burger Veggie" target="_blank" className="btn btn-pedir"><FaShoppingCart />Pedir</a>
                </li>

                <li>
                    <img src="https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&amp;h=300&amp;fit=crop" alt="Batata Frita" />
                    <h3>Batata Frita</h3>
                    <p>Porção generosa de batatas fritas crocantes com sal e temperos especiais</p>
                    <strong>R$ 18,90</strong>
                    <a href="https://wa.me/5511999999999?text=Olá! Gostaria de pedir uma Batata Frita" target="_blank" className="btn btn-pedir"><FaShoppingCart />Pedir</a>
                </li>

                <li>
                    <img src="https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Milk Shake" />
                    <h3>Milk Shake</h3>
                    <p>Milk shake cremoso nos sabores chocolate, morango ou ovomaltine (400ml)</p>
                    <strong>R$ 16,90</strong>
                    <a href="https://wa.me/5511999999999?text=Olá! Gostaria de pedir um Milk Shake" target="_blank" className="btn btn-pedir"><FaShoppingCart />Pedir</a>
                </li>
            </ul>
        </section>
    )
}

export default Cardapio
