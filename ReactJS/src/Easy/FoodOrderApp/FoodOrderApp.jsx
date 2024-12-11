import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/LayOut/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const FoodOrderApp = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default FoodOrderApp;

// https://github.com/KingaMiroslaw/food-order

// 006 lecture se star krna he
