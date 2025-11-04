import { createProductCard } from "./createProductCard.js";
import {products} from "./product.js";
import { findProductInCart } from "./findProductInCart.js";

const productContainer=document.getElementById("products");
const filterContainer=document.querySelector(".filter-container")

let cart=JSON.parse(localStorage.getItem("cart"))||[];

productContainer.addEventListener("click",(e)=>{
    const isProductInCart=findProductInCart(cart,e.target.dataset.id);
    if(!isProductInCart){
        const productToAddToCart=products.filter(({_id})=> _id === e.target.dataset.id);
        cart=[...cart, ...productToAddToCart];
        localStorage.setItem("cart",JSON.stringify(cart));
        const cartButton=e.target;
        cartButton.innerHTML="Go to Cart <span class='material-icons-outlined'>shopping_cart</span>";
    }
    else{
        location.href="cart.html";
    }
});

filterContainer.addEventListener("click",(e)=>{
    const filterRating=Number(e.target.dataset.rating);
    const updatedProducts=products.filter(({rating})=>rating>=filterRating);
    productContainer.innerHTML="";
    createProductCard(updatedProducts,productContainer,findProductInCart,"products");
})

createProductCard(products,productContainer,findProductInCart,"products");