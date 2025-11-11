import { createHorizontalProductCard } from "./createHorizontalProductCard.js";
import { findProductInCart } from "./findProductInCart.js";
import { priceDetailsContainer } from "./priceDetails.js";

let cartContainer=document.getElementById("cart");
let cart=JSON.parse(localStorage.getItem("cart"))||[];

priceDetailsContainer(cart,cartContainer,findProductInCart,"cart");

cartContainer.addEventListener("click",(e)=>{
    cart=cart.filter(({_id})=>_id!==e.target.dataset.id);
    cartContainer.innerHTML="";
    createHorizontalProductCard(cart,cartContainer,findProductInCart,"cart");
    localStorage.setItem("cart",JSON.stringify(cart));
    priceDetailsContainer(cart,cartContainer,findProductInCart,"cart");
});

createHorizontalProductCard(cart,cartContainer,findProductInCart,"cart");