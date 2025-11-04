import {products} from "./product.js";

export const createProductCard=(products,parentContainer,findProductInCart,pageType)=>{

    for(let product of products){
        const cardContainer=document.createElement("div");
        cardContainer.classList.add(
            "card",
            "card-vertical",
            "d-flex",
            "direction-column",
            "relative",
            "shadow");
        const imageContainer=document.createElement("div");
        imageContainer.classList.add("card-image-container");
        const image=document.createElement("img");
        image.classList.add("card-image");
        image.setAttribute("src",product.img);
        image.setAttribute("alt",product.name);
        imageContainer.appendChild(image);

        const cardDetailsContainer=document.createElement("div");
        cardDetailsContainer.classList.add("card-details");

        const brandContainer=document.createElement("div");
        brandContainer.classList.add("card-title");
        brandContainer.innerText=product.brand;
        cardDetailsContainer.appendChild(brandContainer);

        const descriptionContainer=document.createElement("div");
        descriptionContainer.classList.add("card-description");
        const name=document.createElement("p");
        name.classList.add("card-desc");
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

        const ratings=document.createElement("p");
        ratings.classList.add("d-flex", "align-center");

        const rating = document.createElement("span");
        rating.innerText = product.rating;
        ratings.appendChild(rating);

        const star = document.createElement("span");
        star.classList.add("material-icons-outlined", "star");
        star.innerText = "star";
        ratings.appendChild(star);
        descriptionContainer.appendChild(ratings);
        descriptionContainer.appendChild(price);
        cardDetailsContainer.appendChild(descriptionContainer);

        const ctaButton=document.createElement("div");
        const cartButton=document.createElement("button");
        cartButton.classList.add(
            "button",
            "btn-primary",
            "btn-icon",
            "cart-btn",
            "d-flex",
            "align-center",
            "justify-center",
            "gap",
            "cursor",
            "btn-margin");
        cartButton.setAttribute("data-id", product._id);
        const cart=document.createElement("span");
        cart.classList.add("material-icons-outlined");
        cart.innerText="shopping_cart";
        cartButton.appendChild(cart);
        const buttonText=document.createElement("span");

        const isProductInCart=findProductInCart(JSON.parse(localStorage.getItem("cart")),product._id);
        buttonText.innerText=pageType === "cart"? "Remove": pageType ==="products" && isProductInCart?"Go to Cart":"Add to Cart";
        cartButton.appendChild(buttonText);
        ctaButton.appendChild(cartButton);
        cardDetailsContainer.appendChild(ctaButton);

        descriptionContainer.appendChild(ratings);
        cardDetailsContainer.appendChild(descriptionContainer);
        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(cardDetailsContainer);
        parentContainer.appendChild(cardContainer);
    }
}