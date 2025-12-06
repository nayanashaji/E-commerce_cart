import {products} from "./product.js";
import { findProductInCart } from "./findProductInCart.js";

export const createWishCard=(products,parentContainer,findProductInwishlist,pageType)=>{

    for(let product of products){
        const cardContainer=document.createElement("div");
        cardContainer.classList.add(
            "card-horizontal",
            "d-flex",
            "shadow");
        const imageContainer=document.createElement("div");
        imageContainer.classList.add("card-hori-image-container","relative");
        const image=document.createElement("img");
        image.classList.add("card-image");
        image.setAttribute("src",product.img);
        image.setAttribute("alt",product.name);
        imageContainer.appendChild(image);

        const cardDetailsContainer=document.createElement("div");
        cardDetailsContainer.classList.add(
            "card-details",
            "d-flex",
            "direction-column");

        const brandContainer=document.createElement("div");
        brandContainer.classList.add("card-title");
        brandContainer.innerText=product.brand;
        cardDetailsContainer.appendChild(brandContainer);

        const descriptionContainer=document.createElement("div");
        descriptionContainer.classList.add("card-description");
        const name=document.createElement("p");
        name.classList.add("card-des");
        name.innerText=product.name;
        descriptionContainer.appendChild(name);

        const price=document.createElement("p");
        price.classList.add("card-price","d-flex", "align-end", "gap-sm");
        price.innerText=`Rs. ${product.newPrice}`;

        const oldPrice=document.createElement("span");
        oldPrice.classList.add("price-strike-through");
        oldPrice.innerText=`Rs.${product.oldPrice}`;
        price.appendChild(oldPrice);

        const discount=document.createElement("span");
        discount.classList.add("discount");
        discount.innerText=`Rs.${product.discount}% off`;
        price.appendChild(discount);

        descriptionContainer.appendChild(price);

        const ctaButton = document.createElement("div");
        ctaButton.classList.add("cta-btn", "d-flex", "gap");
        const removeButton = document.createElement("button");
        removeButton.classList.add(
          "button",
          "hori-btn",
          "btn-primary",
          "btn-icon",
          "d-flex",
          "align-center",
          "justify-center",
          "gap",
          "cursor",
          "btn-margin",
          "remove-button"
        );
        removeButton.setAttribute("data-id", product._id);
        removeButton.innerText = "Remove";

        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add(
          "button",
          "hori-btn",
          "btn-primary",
          "btn-icon",
          "d-flex",
          "align-center",
          "justify-center",
          "gap",
          "cursor",
          "btn-margin",
          "addtocart-button"
        );
        addToCartButton.setAttribute("data-id", product._id);
        let isProductInCart=findProductInCart(JSON.parse(localStorage.getItem("cart")),product._id);
        addToCartButton.innerHTML =isProductInCart?"Go to Cart<span class='material-icons-outlined'>shopping_cart</span>":"Add to Cart <span class='material-icons-outlined'>shopping_cart</span>";

        ctaButton.appendChild(removeButton);
        ctaButton.appendChild(addToCartButton);
        descriptionContainer.appendChild(ctaButton);
        cardDetailsContainer.appendChild(descriptionContainer);
        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(cardDetailsContainer);
        parentContainer.appendChild(cardContainer);
    }
}