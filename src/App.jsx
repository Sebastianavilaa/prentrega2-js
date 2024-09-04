import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavbarContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "./contexts/CartContexts"
import Carrito from "./components/Carrito"
import CheckoutContainer from "./components/CheckoutContainer"


function App() {

  return (
    <Provider>
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/cat/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/checkout" element={<CheckoutContainer/>} />
      </Routes>         
    </BrowserRouter>
    </Provider>
  )
}

export default App
