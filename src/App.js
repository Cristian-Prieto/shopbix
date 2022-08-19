import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ShoppingList } from "./components/ShoppingList";
import "./App.css";
import AppContextComponent from "./context";

function App() {
  return (
    <AppContextComponent>
      <div className="App">
        <Header />
        <ShoppingList />
        <Footer />
      </div>
    </AppContextComponent>
  );
}

export default App;
