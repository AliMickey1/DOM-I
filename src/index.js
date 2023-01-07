const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')



// const siteContent 
//All links
const nav1Link = document.querySelector('header nav a')
nav1Link.textContent = siteContent.nav["nav-item-1"]
const nav2Link = document.querySelector('header nav a')
nav2Link.textContent = siteContent.nav["nav-item-2"]
const nav3Link = document.querySelector('header nav a')
nav3Link.textContent = siteContent.nav["nav-item-3"]
const nav4Link = document.querySelector('header nav a')
nav4Link.textContent = siteContent.nav["nav-item-4"]
const nav5Link = document.querySelector('header nav a')
nav5Link.textContent = siteContent.nav["nav-item-5"]
const nav6Link = document.querySelector('header nav a')
nav6Link.textContent = siteContent.nav["nav-item-6"]




//adding words to links
links.textContent = 'Services'

// "nav-item-1": "Services",
//     "nav-item-2": "Product",
//     "nav-item-3": "Vision",
//     "nav-item-4": "Features",
//     "nav-item-5": "About",
//     "nav-item-6": "Contact",
//logo img
const logoImg = document.querySelector('#logo-img')
logoImg.src = siteContent.images['logo-img']
//ctaimgs
const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.images['cta-img']
//middle accent img
const middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent.images['accent-img']



//header
const header = document.querySelector('header')
//header tags
const h1tag = document.querySelectorAll('h1')
const h2tag = document.querySelectorAll('h2')
const h3tag = document.querySelectorAll('h3')
const h4tag = document.querySelectorAll('h4')
//div
const divider = document.querySelectorAll('div')
//contact
const contact = document.querySelector('contact')



//footer
const foot = document.querySelector('footer a')
foot.textContent = siteContent.footer.copyright
foot.classList.add('bold')
