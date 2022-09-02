import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContextComponent from "./context";
import { Home } from "./pages/Home";
import { ShoppingList } from "./pages/ShoppingList";
import { ProductDetail } from "./pages/ProductDetail";
import { CartSummary } from "./pages/CartSummary";
import { AddProduct } from "./pages/AddProduct";
import { Payment } from "./pages/Payment";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <AppContextComponent>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col  bg-slate-50">
          <Header />
          <div className="flex flex-col flex-1 items-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list" element={<ShoppingList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/cart" element={<CartSummary />} />
              <Route path="/cart/payment" element={<Payment />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </AppContextComponent>
  );
}

export default App;
