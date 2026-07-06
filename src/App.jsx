import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { FormContainer } from './Form/FormContainer.jsx'
import { CartView } from './components/Cart/CartView.jsx'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer.jsx'
import { ProductSuccess } from './components/adminComponents/ProductFormSuccess.jsx'

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
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/form" element={<FormContainer />} />

          <Route path="/admin" element={<ProductFormContainer />} />
          <Route path="/success/:id" element={<ProductSuccess />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

