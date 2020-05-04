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

//update header img

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

//update middle img

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//update h1

let h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];

//update button

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

//loop through anchors and apply color green

let anchors = document.querySelectorAll("a");
for (let i = 0; i < anchors.length; i++) {
  anchors[i].textContent = siteContent["nav"]["nav-item-" + (i + 1)];
  anchors[i].style.color = "green";
}

//add 2 new nav elements
//new nav element 1 added to end of nav

const aChildAppend = document.createElement("a");
aChildAppend.href = "#";
aChildAppend.textContent = "Reviews";
aChildAppend.style.color = "green";
const nav = document.querySelector("nav");
nav.appendChild(aChildAppend);

//new nav element 2 added to front of nav

const aPrepend = document.createElement("a");
aPrepend.href = "#";
aPrepend.textContent = "Let's Chat";
aPrepend.style.color = "green";
nav.prepend(aPrepend);

//middle section content headings

let h4 = document.querySelectorAll("h4"); //all h4

//features card

h4[0].textContent = siteContent["main-content"]["features-h4"];

//about card

h4[1].textContent = siteContent["main-content"]["about-h4"];

//services card

h4[2].textContent = siteContent["main-content"]["services-h4"];

//product card

h4[3].textContent = siteContent["main-content"]["product-h4"];

//vision card

h4[4].textContent = siteContent["main-content"]["vision-h4"];

//middle section content paragraphs

let p = document.querySelectorAll("p"); //all p tags
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];

//contact section

//contact heading

h4[5].textContent = siteContent["contact"]["contact-h4"];

//contact items

p[5].textContent = siteContent["contact"]["address"];
p[6].textContent = siteContent["contact"]["phone"];
p[7].textContent = siteContent["contact"]["email"];

//footer section

p[8].textContent = siteContent["footer"]["copyright"];
