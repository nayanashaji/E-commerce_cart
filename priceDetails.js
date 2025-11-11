import { createHorizontalProductCard } from "./createHorizontalProductCard.js";

export const priceDetailsContainer=(cart,cartContainer,findProductInCart,pageType)=>{
    const cartLength=document.querySelector(".item-count");
    cartLength.innerText=JSON.parse(localStorage.getItem("cart")).length;
    
    const productPrice=document.querySelector(".product-price");
    const finalPrice=JSON.parse(localStorage.getItem("cart")).reduce((acc,cur)=>acc+cur.newPrice,0);
    productPrice.innerText=finalPrice;
    
    const discount=document.querySelectorAll(".discounted-amount");
    const priceBeforeDiscount=JSON.parse(localStorage.getItem("cart")).reduce((acc,cur)=>acc+cur.oldPrice,0);
    const discountAmount=priceBeforeDiscount-finalPrice;
    for(let element of discount)
    {
        element.innerText=discountAmount;
    }
    
    const totalAmount=document.querySelector(".total-amount");
    totalAmount.innerText=finalPrice+100;
    
}