import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { CartSummary } from "./components/CartSummary";
import { ProductDetail } from "./components/ProductDetail";
import { EditProduct } from "./components/EditProduct";
import { ShoppingList } from "./components/ShoppingList";
import "./App.css";
import AppContextComponent from "./context";

function App() {
  return (
    <AppContextComponent>
      <BrowserRouter>
        <div className="App flex min-h-screen flex-col  bg-slate-50">
          <Header />
          <div className="flex flex-col flex-1 items-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list" element={<ShoppingList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/edit" element={<EditProduct />} />
              <Route path="/cart" element={<CartSummary />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </AppContextComponent>
  );
}

export default App;
