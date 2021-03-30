"use strict";

import { service_data, about_data, products_data } from "./data.js";

function createElement(element_name, constructor) {
    customElements.define(element_name, constructor);
}

class XService extends HTMLElement{
    constructor() {
        super();
    }

    render() {
        const service_wrapper = document.createElement("div");
        service_wrapper.setAttribute("class", "service-wrapper");

        service_data.forEach(service => {
            const services = `
                <div class="service-card">
                    <div class="service-header">
                        <i class="${service.font_awesome_class}"></i>
                        <p class="service-name">${service.name}</p>
                    </div>

                    <div class="service-body">
                        <p class="paragraph service-descrip t-center">
                        ${service.description}
                        </p>
                    </div>
                </div>
            `;
            service_wrapper.innerHTML += `${services}`;
        });
        this.appendChild(service_wrapper);
        this.setAttribute("class", "service-section-wrapper");
        this.style.display = "block";
    }

    connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
        this.render();
    }
}

createElement("grocmart-service", XService);


class XAbout extends HTMLElement{
    constructor() {
        super();
    }

    render() {
        const about = `
            <div class="about-img-wrapper">
                <img src="${about_data.about_bg}" class="about-img img-fluid" alt=""/>
            </div>

            <div class="about-content">
                <header class="about-header">
                    <p class="about-header-style header-tag-style t-center">${about_data.about_style_tag}</p>
                    <h2 class="header t-center">${about_data.about_header_title}</h2>
                </header>

                <p class="paragraph t-center">${about_data.about_content.description}</p>

                <div class="signature-container">
                    <div class="about-signature-wrapper">
                        <button class="about-signature-btn btn"><i class="${about_data.about_content.redirection_icon}"></i></button>
                        <p class="grocmart-author-signature">
                            <span class="author-name">${about_data.about_content.author_name}</span><br>
                            <span class="author-role">${about_data.about_content.author_role}</span>
                        </p>
                    </div>  

                    <div class="signature-img-wrapper">
                        <img src="${about_data.about_content.signature_img}" class="signature-img" alt="grocmart-signature" />
                    </div>
                </div>
            </div>
        `;
        this.innerHTML += about;
        this.setAttribute("class", "about-section-container");
    }
    connectedCallback() {
        // browser calls this metroduct-wrapperhod when the element is added to the document
        // (can be called many times if an element is repeatedly added/removed)
        this.render();
    }
}

createElement("grocmart-about", XAbout);

function formatCurrency(value) {
    return "$" + value;
}

class XProduct extends HTMLElement{
    constructor() {
        super();
    }

    render() {
        this.innerHTML += `
            <p class="product-style-tag t-center header-tag-style">Latest Arrivals</p>
            <h2 class="product--title-name t-center header">New Products</h2>

            <div class="product-filtering-wrapper"></div>
            <div class="product-wrapper></div>
        `;

        const product_parent = document.createElement("div");
        product_parent.setAttribute("class", "product-wrapper");

        products_data.products.forEach(product => {
            const products = `
                <div class="product-card">
                        <div class="product-header">
                            <div class="product-panel">
                                ${!product.is_available || product.quantity == 0 ? ` <span class="sold_panel">sold</span>` : ""}
                                ${!product.is_available || product.quantity == 0 ? "" : `<span class="popularity_panel">${product.polularity}</span>`}
                            </div>
                            <img src="${product.image}" class="img-fluid" alt="${product.name}"/>
                        </div>

                        <div class="product-body">
                            <div class="product-price-container">
                                <p class="product-name t-center">${product.name}</p>
                                <p class="product-price-wrapper">
                                    ${!product["old-price"] ? "" : ` <span class="old-price"><em>${formatCurrency(product["old-price"])}</em></span>`}
                                    <span class="original-price">${formatCurrency(product.price)}</span>
                                </p>
                            </div>

                            <div class="cart-search-wrapper">
                                <a class="search-product" href="#"><i class="fas fa-search"></i></a>
                                <a class="add-product-to-card" href="#"><i class="fas fa-cart-arrow-down"></i></a>
                            </div>
                        </div>
                    </div>
                `;
            product_parent.innerHTML += `${ products }`;
        });
        this.appendChild(product_parent);
    }

    connectedCallback() {
        // browser calls this metroduct-wrapperhod when the element is added to the document
        // (can be called many times if an element is repeatedly added/removed)
        this.render();
    }
}

createElement("grocmart-product", XProduct);