import React from "react";
import { cartData } from "../cartdata";

function CartList() {
  return (
    <div>
      {cartData.map((item) => (
        <div> {item.type} </div>
      ))}
    </div>
  );
}

export default CartList;
