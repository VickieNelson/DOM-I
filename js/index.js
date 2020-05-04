const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navAnchors = document.querySelectorAll("a");
// console.log(navAnchors);

//set attribute
navAnchors[0].setAttribute("class", "nav-item-1");
navAnchors[1].setAttribute("class", "nav-item-2");
navAnchors[2].setAttribute("class", "nav-item-3");
navAnchors[3].setAttribute("class", "nav-item-4");
navAnchors[4].setAttribute("class", "nav-item-5");
navAnchors[5].setAttribute("class", "nav-item-6");

//inner text
navAnchors[0].innerText("Service");
navAnchors[1].innerText("Product");
navAnchors[2].innerText("Vision");
navAnchors[3].innerText("Features");
navAnchors[4].innerText("About");
navAnchors[5].innerText("Contact");

navAnchors.forEach((link) => (link.style.color = "green"));

//add 2 new nav items

//new nav item 1

const newNavItem1 = document.createElement('a'); //create the first new nav elem
const newNavItem1.innerText = "Chat"; //add text to the new nav elem
newNavItem1.style.color = 'green'; //add color to the new nav item
newNavItem1.href = '#'; 
const newHeader = document.querySelector('nav'); // add new item to the header
newHeader.appendChild(newNavItem1);
//new nav item 2


const newNavItem2 = document.createElement('a'); //create the 2nd new nav elem
const newNavItem2.innerText = "Reviews"; //add text to the new nav elem
newNavItem2.style.color='green'; //add color to the new nav item
newNavItem2.href = '#'; 
const newHeader2 = document.querySelector('nav'); // add new item to the header
newHeader2.appendChild(newNavItem1);

