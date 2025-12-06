import { createHorizontalProductCard } from "./createHorizontalProductCard.js";
import { findProductInCart } from "./findProductInCart.js";
import { findProductInwishlist } from "./findProductInwishlist.js";
import { priceDetailsContainer } from "./priceDetails.js";
import { products } from "./product.js";

let cartContainer=document.getElementById("cart");
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
let placeorderContainer=document.querySelector(".placeorder-butn");

priceDetailsContainer(cart,cartContainer,findProductInCart,"cart");

cartContainer.addEventListener("click",(e)=>{
    let removeButton=e.target.closest(".remove-butn");
    let savewishButton=e.target.closest(".savewish-butn");
    if(removeButton)
    {
        const id=removeButton.dataset.id;
        cart=cart.filter(({_id})=>_id!==id);
        cartContainer.innerHTML="";
        createHorizontalProductCard(cart,cartContainer,findProductInCart,"cart");
        localStorage.setItem("cart",JSON.stringify(cart));
        priceDetailsContainer(cart,cartContainer,findProductInCart,"cart");
    }
    else if(savewishButton)
    {
        const id=savewishButton.dataset.id;
        const isProductInWishList=findProductInwishlist(JSON.parse(localStorage.getItem("wishlist")),id);
        if(!isProductInWishList)
        {
            const productToAddToWishList=products.filter(({_id})=> _id === id);
            wishlist=[...wishlist, ...productToAddToWishList];
            localStorage.setItem("wishlist",JSON.stringify(wishlist));
            savewishButton.innerHTML="Go to Wishlist";
        }
        else
        {
            location.href="wishlist.html";
        }
    }
});

placeorderContainer.addEventListener("click",(e)=>{
    alert("Thank you for shopping with us!");
});

createHorizontalProductCard(cart,cartContainer,findProductInCart,"cart");