/* Menu */
const zakresUslug = document.querySelector(".zakresUslug");
const modelLean = document.querySelector(".lean");
const produktySection = document.querySelector(".produkty");

const scrollMenu = (n) => {
    let el;
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
            break;
    }
    el.scrollIntoView({
        top: 0,
        behavior: "smooth"
    });
}

/* Produkty accordion */
const produkty1 = document.querySelector(".produktyRightItem:nth-child(1)>.produktyRightText");
const produkty2 = document.querySelector(".produktyRightItem:nth-child(2)>.produktyRightText");
const produkty3 = document.querySelector(".produktyRightItem:nth-child(3)>.produktyRightText");
const produkty4 = document.querySelector(".produktyRightItem:nth-child(4)>.produktyRightText");
const produkty5 = document.querySelector(".produktyRightItem:nth-child(5)>.produktyRightText");
const produkty6 = document.querySelector(".produktyRightItem:nth-child(6)>.produktyRightText");
const produkty7 = document.querySelector(".produktyRightItem:nth-child(7)>.produktyRightText");

const arrow1 = document.querySelector(".produktyRightItem:nth-child(1)>h3>.arrowWrapper>.arrow");
const arrow2 = document.querySelector(".produktyRightItem:nth-child(2)>h3>.arrowWrapper>.arrow");
const arrow3 = document.querySelector(".produktyRightItem:nth-child(3)>h3>.arrowWrapper>.arrow");
const arrow4 = document.querySelector(".produktyRightItem:nth-child(4)>h3>.arrowWrapper>.arrow");
const arrow5 = document.querySelector(".produktyRightItem:nth-child(5)>h3>.arrowWrapper>.arrow");
const arrow6 = document.querySelector(".produktyRightItem:nth-child(6)>h3>.arrowWrapper>.arrow");
const arrow7 = document.querySelector(".produktyRightItem:nth-child(7)>h3>.arrowWrapper>.arrow");

const products = [produkty1, produkty2, produkty3, produkty4, produkty5, produkty6, produkty7];
const arrows = [arrow1, arrow2, arrow3, arrow4, arrow5, arrow6, arrow7];

const produkty = async (n) => {
    products.forEach(item => {
        item.style.height = 0;
        item.style.opacity = 0;
    });
    arrows.forEach(item => {
        item.style.transform = "rotate(-90deg)";
    });
    products[n-1].style.height = "auto";
    products[n-1].style.opacity = 1;
    arrows[n-1].style.transform = "rotate(0)";
}
