import './App.css'
import Cardapio from './components/cardapio/Cardapio'
import Cta from './components/cta/Cta'
import Contato from './components/footer/Contato'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Sobre from './components/sobre/Sobre'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Cardapio />
      <Sobre />
      <Cta />
      <Contato />
    </>
  )
}

export default App
