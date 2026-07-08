import './App.css'
import { Footer } from './components/Footer/Footer.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { FormContainer } from './Form/FormContainer.jsx'
import { CartView } from './components/Cart/CartView.jsx'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer.jsx'
import { ProductSuccess } from './components/adminComponents/ProductFormSuccess.jsx'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.jsx'
import { AdminLayout } from './layouts/AdminLayout.jsx'
import { PublicLayout } from './layouts/PublicLayout.jsx'
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard.jsx'
import { Navigate } from 'react-router-dom'
import { Login } from './components/Login/Login.jsx'

function App() {

  return (
    <>
      <main>
        {/* Dentro de Routes van las rutas que va a tener la app
        No puede poner nada mas, por ejemplo, si pongo un componente
        se rompe*/}
        <Routes>
          {/*cada ruta tiene element, que es el componente
          que va a renderizarse luego de elegir ir a esa ruta */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/form" element={<FormContainer />} />
          </Route>

          <Route path="/admin/login" element={<Login />} />

          {/* Anidación de routes, para rutas protegidas */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          } >
            {/* si entra directamente a "/admin" lo mandamos a "/admin/dashboard" */}
            <Route index element={<Navigate to={"dashboard"} />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="products/new" element={<ProductFormContainer />} />
            <Route path="products/success/:id" element={<ProductSuccess />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App

