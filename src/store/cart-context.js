import React from "core-js/library/fn/reflect/es7/metadata";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext