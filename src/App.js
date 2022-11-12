import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

import './App.css';
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {

  const [showModal, setShowModal] = useState(false);

  const modalShowHandler = () => {
    setShowModal(prev => !prev);
  }
  return (
    <CartProvider>
      { showModal && <Cart onModalShow={ modalShowHandler }/> }
      <Header onModalShow={ modalShowHandler }/>
      <Meals />
    </CartProvider>
  );
}

export default App;
            
