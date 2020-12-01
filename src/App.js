import "./App.css";
import Header from "./layout/Header";
import CartList from "./components/CartList";

function App() {
  return (
    <div className="app-container">
      <Header />
      <CartList />
    </div>
  );
}

export default App;
