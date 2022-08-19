import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ShoppingList } from "./components/ShoppingList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;
