import { createProductCard } from "./createProductCard.js";
import {products} from "./product.js";
import { findProductInCart } from "./findProductInCart.js";
import { findProductInwishlist } from "./findProductInwishlist.js";

const productContainer=document.getElementById("products");
const filterContainer=document.querySelector(".filter-container")

let cart=JSON.parse(localStorage.getItem("cart"))||[];
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];


productContainer.addEventListener("click",(e)=>{
    let cartButtonContainer=e.target.closest(".cart-btn");
    let wishButtonContainer=e.target.closest(".wish-button");

    if(cartButtonContainer&&productContainer.contains(cartButtonContainer))
    {
        const id=cartButtonContainer.dataset.id;
        const isProductInCart=findProductInCart(cart,id);
        if(!isProductInCart){
            const productToAddToCart=products.filter(({_id})=> _id === id);
            cart=[...cart, ...productToAddToCart];
            localStorage.setItem("cart",JSON.stringify(cart));
            cartButtonContainer.innerHTML="Go to Cart <span class='material-icons-outlined'>shopping_cart</span>";
        }
        else{
            location.href="cart.html";
        }
    }
    else if(wishButtonContainer&&productContainer.contains(wishButtonContainer))
    {
        const id=wishButtonContainer.dataset.id;
        const isProductInWishList=findProductInwishlist(wishlist,id);
        if(!isProductInWishList){
            const favicon=wishButtonContainer.querySelector(".material-icons-outlined");
            const productToAddToWishList=products.filter(({_id})=> _id === id);
            wishlist=[...wishlist, ...productToAddToWishList];
            localStorage.setItem("wishlist",JSON.stringify(wishlist));
            favicon.innerText="favorite";
            favicon.classList.remove("white-fill");
            favicon.classList.add("red-fill");
        }
        else{
            const favicon=wishButtonContainer.querySelector(".material-icons-outlined");
            wishlist=wishlist.filter(({_id})=> _id !== id);
            localStorage.setItem("wishlist",JSON.stringify(wishlist));
            favicon.innerText="favorite_border";
            favicon.classList.remove("red-fill");
            favicon.classList.add("white-fill");
        }
    }

});

filterContainer.addEventListener("click",(e)=>{
    const filterRating=Number(e.target.dataset.rating);
    const updatedProducts=products.filter(({rating})=>rating>=filterRating);
    productContainer.innerHTML="";
    createProductCard(updatedProducts,productContainer,findProductInCart,findProductInwishlist,"products");
})

createProductCard(products,productContainer,findProductInCart,findProductInwishlist,"products");