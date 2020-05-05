'use strict'
window.dataLayer = [];

function pageLoad(window) {
    let event = {
        eventName: 'pageLoad',
        pageType: 'PLP',
        URL: window.location.href,
        counter: 1
    };
   
    window.dataLayer.push(event);
};

window.addEventListener('onload', pageLoad(window));

function changeColor(color) {
    let event = {
        eventName: 'changeColor',
        pageType: 'PLP',
        requestedColor: color,
        counter: 1
    };

    if (window.dataLayer.length) {
        for (let i = 0; i < window.dataLayer.length; i++) {
            if (window.dataLayer[i].requestedColor === color) {
                window.dataLayer[i].counter += 1;
            } else {
                window.dataLayer.push(event);
            }
        }
    } 
};

function changeSize(size) {
    let event = {
        eventName: 'changeSize',
        pageType: 'PLP',
        requestedSize: size,
        counter: 1
    };
    
    if (window.dataLayer.length) {
        for (let i = 0; i < window.dataLayer.length; i++) {
            if (window.dataLayer[i].requestedSize === size) {
                window.dataLayer[i].counter += 1;
            } else {
                window.dataLayer.push(event);
            }
        }
    } 
};

function productAddToCart(id) {
    let event = {
        eventName: 'productAddToCart',
        pageType: 'PLP',
        productId: id,
        counter: 1
    };
    
    if (window.dataLayer.length) {
        let data = window.dataLayer;
        for (let i = 0; i < data.length; i++) {
            if (data[i].productId === id) {
                data[i].counter += 1;
                break;
            } else {
                window.dataLayer.push(event);
                break;
            }
        }
    } 
};
