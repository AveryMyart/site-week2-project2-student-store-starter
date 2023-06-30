import { useState } from "react";
import ListItemForm from "../ListItemForm/ListItemForm";
import ListItem from "../ListItem/ListItem";
import "./ShoppingList.css";

function ShoppingList({cart, products}) {
  return (
    <div className={`ShoppingList ${Object.keys(cart).length ? "list-full" : "list-empty"}`}>
      <h1 className="title">Shopping Cart 🛒</h1>

      {Object.keys(cart).length ?
        Object.entries(cart).map(([id, quantity]) => {
          const product = products.find(product => product.id === Number(id)); 
          return (
            // <div class="CartTable">
            //   <div class="header">
            //     <div class="header-row">
            //       <span class="flex-2">Name</span>
            //       <span class="center">Quantity</span>
            //       <span class="center">Unit Price</span>
            //       <span class="center">Cost</span>
            //     </div>
            //     <div class="product-row">
            //       // something here
            //     </div>
            //   </div>
            //   <div class="receipt">
            //     <div class="receipt-subtotal">
            //       <span class="label">Subtotal</span>
            //       <span></span>
            //       <span></span>
            //       //something here
            //     </div>
            //     <div class="receipt-taxes">
            //       <span class="label">Taxes and Fees</span>
            //       <span></span>
            //       <span></span>
            //       //something here
            //     </div>
            //     <div class="receipt-total">
            //       <span class="label">Total</span>
            //       <span></span>
            //       <span></span>
            //       //something here
            //     </div>
            //   </div>
            // </div>

<div class="Cart-table">
<div class="header">
  <div class="header-row">
    <span class="flex-2">Name</span>
    <span class="center">Quantity</span>
    <span class="center">Unit Price</span>
    <span class="center">Cost</span>
  </div>
  <div class="product-row">
    <span class="flex-2 cart-product-name">Cinnamon Rolls</span>
    <span class="center cart-product-quantity">1</span>
    <span class="center cart-product-price">$2.99</span>
    <span class="center cart-product-subtotal">$2.99</span>
  </div>
</div>
<div class="receipt">
  <div class="receipt-subtotal">
    <span class="label">Subtotal</span>
    <span></span>
    <span></span>
    <span class="center subtotal">$2.99</span>
  </div>
  <div class="receipt-taxes">
    <span class="label">Taxes and Fees</span>
    <span></span>
    <span></span>
    <span class="center">$0.26</span>
  </div>
  <div class="receipt-total">
    <span class="label">Total</span>
    <span></span>
    <span></span>
    <span class="center total-price">$3.25</span>
  </div>
</div>
</div>
          );
        })
        :  
        <p>No items added to cart yet. Start shopping now!</p>
      }
    </div>
  );
}


export default ShoppingList;


 <div class="CartTable">
  <div class="header">
    <div class="header-row">
      <span class="flex-2">Name</span>
      <span class="center">Quantity</span>
      <span class="center">Unit Price</span>
      <span class="center">Cost</span>
    </div>
    <div class="product-row">
      <span class="flex-2 cart-product-name">Cinnamon Rolls</span>
      <span class="center cart-product-quantity">1</span>
      <span class="center cart-product-price">$2.99</span>
      <span class="center cart-product-subtotal">$2.99</span>
    </div>
  </div>
  <div class="receipt">
    <div class="receipt-subtotal">
      <span class="label">Subtotal</span>
      <span></span>
      <span></span>
      <span class="center subtotal">$2.99</span>
    </div>
    <div class="receipt-taxes">
      <span class="label">Taxes and Fees</span>
      <span></span>
      <span></span>
      <span class="center">$0.26</span>
    </div>
    <div class="receipt-total">
      <span class="label">Total</span>
      <span></span>
      <span></span>
      <span class="center total-price">$3.25</span>
    </div>
  </div>
</div>


{/* <div class="CartTable">
  <div class="header">
    <div class="header-row">
      <span class="flex-2">Name</span>
      <span class="center">Quantity</span>
      <span class="center">Unit Price</span>
      <span class="center">Cost</span>
    </div>
    <div class="product-row">
      // something here
    </div>
  </div>
  <div class="receipt">
    <div class="receipt-subtotal">
      <span class="label">Subtotal</span>
      <span></span>
      <span></span>
      //something here
    </div>
    <div class="receipt-taxes">
      <span class="label">Taxes and Fees</span>
      <span></span>
      <span></span>
      //something here
    </div>
    <div class="receipt-total">
      <span class="label">Total</span>
      <span></span>
      <span></span>
      //something here
    </div>
  </div>
</div>  */}