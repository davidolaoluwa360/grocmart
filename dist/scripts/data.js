const service_data = [
    {
        "name": "Quality Products",
        "description": "We work with the best suppliers to offer our customers the fresh grocery products of the highest quality.",
        "font_awesome_class": "fas fa-fish"
    },
    {
        "name": "Affordable prices",
        "description": "Thanks to our affordable pricing policy, our customers don’t have to overpay for the products they need",
        "font_awesome_class": "fas fa-money-check-alt"
    },
    {
        "name": "Fast shipping",
        "description": "Our store offers fast worldwide shipping to all customers regardless of what and how much you order.",
        "font_awesome_class": "fas fa-shipping-fast"
    },
    {
        "name": "open 24/7",
        "description": "Unlike other grocery shops, we are ready to serve you 24/7 and offer the best selection of groceries.",
        "font_awesome_class": "far fa-clock"
    },
];

const about_data = {
    "about_bg": "./dist/assets/about-bg.jpg",
    "about_style_tag": "A Few Words About Our Store",
    "about_header_title": "About us",
    "about_content": {
        "description": "Grocmart is a family-owned grocery store that has been offering quality products for your everyday life since 1999, while also providing superior service and competitive prices.",
        "signature_img": "./dist/assets/about-signature.png",
        "author_name": "Atebisun David",
        "author_role": "CEO, Founder",
        "redirection_icon": "fas fa-arrow-right"
    }
};


const product_categories = {
    "categories": [
        {
            "id": 1,
            "name": "vegetables",
            "description": "vegetable products"
        },
        {
            "id": 2,
            "name": "fruits",
            "description": "fruits products"
        },
        {
            "id": 3,
            "name": "bread",
            "description": "bread products"
        }
    ]
}

const products_data = {
    products: [
        {
            "id": 1,
            "name": "Bananas",
            "image": "./dist/assets/product-1.png",
            "price": "10.00",
            "old-price": "20.00",
            "is_available": true,
            "polularity": "New",
            "quantity": 20,
            "category": "fruits",
            "description": ""
        },
        {
            "id": 2,
            "name": "Potatoes",
            "image": "./dist/assets/product-2.png",
            "price": "12.00",
            "old-price": "",
            "is_available": true,
            "polularity": "Hot",
            "quantity": 20,
            "category": "vegetables",
            "description": ""
        },
        {
            "id": 3,
            "name": "Carrots",
            "image": "./dist/assets/product-3.png",
            "price": "14.00",
            "old-price": "",
            "is_available": false,
            "polularity": "New",
            "quantity": 0,
            "category": "fruits",
            "description": ""
        },
        {
            "id": "4",
            "name": "Sweet peppers",
            "image": "./dist/assets/product-4.png",
            "price": "3.00",
            "old-price": "1.00",
            "is_available": true,
            "polularity": "New",
            "quantity": 8,
            "category": "vegetables",
            "description": ""
        },
        {
            "id": "5",
            "name": "Bread",
            "image": "./dist/assets/product-5.png",
            "price": "4.00",
            "old-price": "",
            "is_available": false,
            "polularity": "Hot",
            "quantity": 0,
            "category": "bread",
            "description": ""
        },
        {
            "id": "6",
            "name": "Strawberries",
            "image": "./dist/assets/product-6.png",
            "price": "7.00",
            "old-price": "20.00",
            "is_available": true,
            "polularity": "New",
            "quantity": 8,
            "category": "vegetables",
            "description": ""
        },
        {
            "id": "7",
            "name": "Cucumbers",
            "image": "./dist/assets/product-7.png",
            "price": "1.00",
            "old-price": "",
            "is_available": true,
            "polularity": "Hot",
            "quantity": 8,
            "category": "fruits",
            "description": ""
        },
        {
            "id": "8",
            "name": "Bagels",
            "image": "./dist/assets/product-8.png",
            "price": "2.00",
            "old-price": "3.00",
            "is_available": true,
            "polularity": "New",
            "quantity": 8,
            "category": "bread",
            "description": ""
        }
    ]
};
export { service_data, about_data, products_data };