/* Produkty accordion */
const produkty1 = document.querySelector(".produktyRightItem:nth-child(1)>.produktyRightText");
const produkty2 = document.querySelector(".produktyRightItem:nth-child(2)>.produktyRightText");
const produkty3 = document.querySelector(".produktyRightItem:nth-child(3)>.produktyRightText");
const produkty4 = document.querySelector(".produktyRightItem:nth-child(4)>.produktyRightText");
const produkty5 = document.querySelector(".produktyRightItem:nth-child(5)>.produktyRightText");
const produkty6 = document.querySelector(".produktyRightItem:nth-child(6)>.produktyRightText");
const produkty7 = document.querySelector(".produktyRightItem:nth-child(7)>.produktyRightText");
const produkty8 = document.querySelector(".produktyRightItem:nth-child(8)>.produktyRightText");

const header1 = document.querySelector(".produktyRightItem:nth-child(1)>.produktyRightHeader");
const header2 = document.querySelector(".produktyRightItem:nth-child(2)>.produktyRightHeader");
const header3 = document.querySelector(".produktyRightItem:nth-child(3)>.produktyRightHeader");
const header4 = document.querySelector(".produktyRightItem:nth-child(4)>.produktyRightHeader");
const header5 = document.querySelector(".produktyRightItem:nth-child(5)>.produktyRightHeader");
const header6 = document.querySelector(".produktyRightItem:nth-child(6)>.produktyRightHeader");
const header7 = document.querySelector(".produktyRightItem:nth-child(7)>.produktyRightHeader");
const header8 = document.querySelector(".produktyRightItem:nth-child(8)>.produktyRightHeader");

const arrow1 = document.querySelector(".produktyRightItem:nth-child(1)>h3>.arrowWrapper>.arrow");
const arrow2 = document.querySelector(".produktyRightItem:nth-child(2)>h3>.arrowWrapper>.arrow");
const arrow3 = document.querySelector(".produktyRightItem:nth-child(3)>h3>.arrowWrapper>.arrow");
const arrow4 = document.querySelector(".produktyRightItem:nth-child(4)>h3>.arrowWrapper>.arrow");
const arrow5 = document.querySelector(".produktyRightItem:nth-child(5)>h3>.arrowWrapper>.arrow");
const arrow6 = document.querySelector(".produktyRightItem:nth-child(6)>h3>.arrowWrapper>.arrow");
const arrow7 = document.querySelector(".produktyRightItem:nth-child(7)>h3>.arrowWrapper>.arrow");
const arrow8 = document.querySelector(".produktyRightItem:nth-child(8)>h3>.arrowWrapper>.arrow");

const products = [produkty1, produkty2, produkty3, produkty4, produkty5, produkty6, produkty7, produkty8];
const arrows = [arrow1, arrow2, arrow3, arrow4, arrow5, arrow6, arrow7, arrow8];
const headers = [header1, header2, header3, header4, header5, header6, header7, header8];
const productsOpen = [false, false, false, false, false, false, false, false];

const produkty = async (n) => {
    if(!productsOpen[n-1]) {
        products.forEach(item => {
            item.style.height = 0;
            item.style.opacity = 0;
        });
        headers.forEach(item => {
           item.style.color = "#2F281E";
        });
        arrows.forEach(item => {
            item.style.transform = "rotate(-90deg)";
        });
        products[n-1].style.height = "auto";
        products[n-1].style.opacity = 1;
        productsOpen[n-1] = true;
        arrows[n-1].style.transform = "rotate(0)";
        headers[n-1].style.color = "#FAB005";
    }
    else {
        headers[n-1].style.color = "#2F281E";
        products[n-1].style.height = 0;
        products[n-1].style.opacity = 0;
        productsOpen[n-1] = false;
        arrows[n-1].style.transform = "rotate(-90deg)";
    }
}

/* Hamburger menu */
const menu = document.querySelector(".menuMobile");
const list = document.querySelector(".menuMobileList");
const container = document.querySelector(".container");

const openMenu = () => {
    menu.style.width = "100%";
    menu.style.height = "100vh";
    list.style.opacity = 1;
    container.style.height = "100vh";
    container.style.overflowY = "hidden";
}

const closeMenu = () => {
    menu.style.height = "100vh";
    menu.style.width = "0";
    list.style.opacity = 0;
    container.style.height = "auto";
    container.style.overflowY = "auto";
}

/* Menu */
const zakresUslug = document.querySelector("#zakresUslug");
const modelLean = document.querySelector("#lean");
const produktySection = document.querySelector("#produkty");
const footer = document.querySelector(".footer");

const scrollMenu = (n) => {
    let el;

    menu.style.height = "100vh";
    menu.style.width = "0";
    list.style.opacity = 0;
    container.style.height = "auto";
    container.style.overflowY = "auto";

    switch(n) {
        case 1:
            el = zakresUslug;
            break;
        case 2:
            el = modelLean;
            break;
        case 3:
            el = produktySection;
            break;
        default:
            el = footer;
            break;
    }
    el.scrollIntoView({
        top: 0,
        behavior: "smooth"
    });
}
