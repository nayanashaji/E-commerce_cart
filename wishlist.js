import { createHorizontalProductCard } from "./createHorizontalProductCard.js";
import { findProductInwishlist } from "./findProductInwishlist.js";

let wishlistContainer=document.getElementById("wishlist");
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];

wishlistContainer.addEventListener("click",(e)=>{
    wishlist=wishlist.filter(({_id})=>_id!==e.target.dataset.id);
    wishlistContainer.innerHTML="";
    createHorizontalProductCard(wishlist,wishlistContainer,findProductInwishlist,"wishlist");
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
});

createHorizontalProductCard(wishlist,wishlistContainer,findProductInwishlist,"wishlist");