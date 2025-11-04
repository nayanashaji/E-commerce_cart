import {products} from "./product.js";

export const createHorizontalProductCard=(products,parentContainer,findProductInCart,pageType)=>{

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

        const quantityContainer = document.createElement("div");
        quantityContainer.classList.add("quantity-container", "d-flex", "gap");

        const quantityContainerTitle = document.createElement("p");
        quantityContainerTitle.classList.add("q-title");
        quantityContainerTitle.innerText = "Quantity";
        quantityContainer.appendChild(quantityContainerTitle);
        const quantity=document.createElement("div");
        quantity.classList.add("count-container", "d-flex", "align-center", "gap");
        const incButton=document.createElement("button");
        incButton.classList.add("count");
        incButton.innerText="+";
        const value=document.createElement("span");
        value.classList.add("count-value");
        value.innerText = "1";
        const decButton=document.createElement("button");
        decButton.classList.add("count");
        decButton.innerText = "-";
        quantity.appendChild(incButton);
        quantity.appendChild(value);
        quantity.appendChild(decButton);
        quantityContainer.appendChild(quantity);
        descriptionContainer.appendChild(quantityContainer);

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
          "btn-margin"
        );
        removeButton.setAttribute("data-id", product._id);
        removeButton.innerText = "Remove";

        const saveButton = document.createElement("button");
        saveButton.classList.add(
          "button",
          "hori-btn",
          "btn-primary",
          "btn-icon",
          "d-flex",
          "align-center",
          "justify-center",
          "gap",
          "cursor",
          "btn-margin"
        );
        saveButton.setAttribute("data-id", product._id);
        saveButton.innerText = "Save to Wishlist";

        ctaButton.appendChild(removeButton);
        ctaButton.appendChild(saveButton);
        descriptionContainer.appendChild(ctaButton);
        cardDetailsContainer.appendChild(descriptionContainer);
        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(cardDetailsContainer);
        parentContainer.appendChild(cardContainer);
    }
}