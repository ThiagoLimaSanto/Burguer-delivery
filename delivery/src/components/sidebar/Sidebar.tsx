import './Sidebar.css'

type Props = {
  isOpen: boolean
}

const Sidebar = ({isOpen}: Props) => {
  return (
    <section className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h1>Ola</h1>
    </section>
  )
}

export default Sidebar
