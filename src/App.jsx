import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { ComponenteConEfecto } from './ComponenteConEfecto.jsx'
import { Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        {/* Dentro de Routes van las rutas que va a tener la app
        No puede poner nada mas, por ejemplo, si pongo un componente
        se rompe*/}
        <Routes>
          {/*cada ruta tiene element, que es el componente
          que va a renderizarse luego de elegir ir a esa ruta */}
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<h1>Carrito</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

