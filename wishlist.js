import { createWishCard } from "./createWishCard.js";
import { findProductInwishlist } from "./findProductInwishlist.js";
import { findProductInCart } from "./findProductInCart.js";
import { products } from "./product.js";

let wishlistContainer=document.getElementById("wishlist");
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
let cart=JSON.parse(localStorage.getItem("cart"))||[];

wishlistContainer.addEventListener("click",(e)=>{
    let removeButton=e.target.closest(".remove-button");
    let addToCartButton=e.target.closest(".addtocart-button");

    if(removeButton)
    {
        const id=removeButton.dataset.id;
        wishlist=wishlist.filter(({_id})=>_id!==id);
        wishlistContainer.innerHTML="";
        createWishCard(wishlist,wishlistContainer,findProductInwishlist,"wishlist");
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
    }
    else if(addToCartButton)
    {
        const id=addToCartButton.dataset.id;
        const isProductInCart=findProductInCart(cart,id);
        if(!isProductInCart)
        {
            const productToAddToCart=products.filter(({_id})=> _id === id);
            cart=[...cart, ...productToAddToCart];
            localStorage.setItem("cart",JSON.stringify(cart));
            addToCartButton.innerHTML="Go to Cart <span class='material-icons-outlined'>shopping_cart</span>";
        }
        else
        {
            location.href="cart.html";
        }
    }
});

createWishCard(wishlist,wishlistContainer,findProductInwishlist,"wishlist");