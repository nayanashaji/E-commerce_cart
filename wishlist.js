import { createWishCard } from "./createWishCard.js";
import { findProductInwishlist } from "./findProductInwishlist.js";

let wishlistContainer=document.getElementById("wishlist");
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];

wishlistContainer.addEventListener("click",(e)=>{
    if(e.target.closest(""))
    wishlist=wishlist.filter(({_id})=>_id!==e.target.dataset.id);
    wishlistContainer.innerHTML="";
    createWishCard(wishlist,wishlistContainer,findProductInwishlist,"wishlist");
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
});

createWishCard(wishlist,wishlistContainer,findProductInwishlist,"wishlist");