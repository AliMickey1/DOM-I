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
const navLink = document.querySelectorAll('header nav a')
const navLinkText = Object.values(siteContent.nav)
navLink.forEach((link, idx) => {
  link.textContent = navLinkText[idx]
  link.classList.add('italic')
})

//logo img
const logoImg = document.querySelector('#logo-img')
logoImg.src = siteContent.images['logo-img']
//cta
const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.images['cta-img']

document.querySelector('.cta .cta-text h1').textContent = siteContent.cta.h1
document.querySelector('.cta .cta-text button').textContent = siteContent.cta.button

const mainSection = document.querySelectorAll('.top-content')
const toph4Tag = mainSection.querySelectorAll('h4')
toph4Tag[0].textContent = siteContent['main-content']['features-h4']
toph4Tag[1].textContent = siteContent['main-content']['features-content']
toph4Tag[2].textContent = siteContent['main-content']['about-h4']
toph4Tag[3].textContent = siteContent['main-content']['about-content']


//contact
const contact = document.querySelector('contact')

//middle accent img
const middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent.images['accent-img']


//footer
const foot = document.querySelector('footer a')
foot.textContent = siteContent.footer.copyright
foot.classList.add('bold')
