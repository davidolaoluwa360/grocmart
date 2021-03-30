"use strict";

import { service_data, about_data } from "./data.js";

const loadService = (function () {
    const service_parent = document.querySelector(".service-wrapper");

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
        service_parent.innerHTML += `${services}`;
    });
})();

const loadAbout = (function () {
    const about_parent = document.querySelector(".about-section-container");
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
    about_parent.innerHTML += about;
})();