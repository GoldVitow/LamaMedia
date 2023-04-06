const burgerNav = document.querySelector('.burger--nav');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

// Page toggle
const pageBtn = document.querySelectorAll(".nav__item");
const pageItems = document.querySelectorAll(".page");
// const imgMenu = document.querySelector('.burger--nav');
const logo = document.querySelector('.logo');

pageBtn.forEach(onPageClick);

function onPageClick(item) {
    item.addEventListener("click", function () {
        if ( (! burger.classList.contains('anim')) & (nav.classList.contains('visible-nav'))) {
            nav.classList.add('visible-nav');
            burger.classList.add('anim');
        } else { 
            nav.classList.remove('visible-nav');
            burger.classList.remove('anim');
        }
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-page");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            pageBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            pageItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
       }
    //    if (! logo.classList.contains('active')) {
    //        imgMenu.classList.add('non-active');

    //    } else { 
    //        imgMenu.classList.remove('non-active');
    //    };
    });
}

document.querySelector('.nav__item').click();



// Tabs toggle
const tabsBtn   = document.querySelectorAll(".tabs-item");
const tabsItems = document.querySelectorAll(".cases__container");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tabs");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
       }
    });
}

// Scroll smooth
// document.querySelectorAll('body a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
 
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

burger.addEventListener('click', () => { 

    if ( ! burger.classList.contains('anim')) {
        nav.classList.add('visible-nav');
        burger.classList.add('anim');
    } else { 
        nav.classList.remove('visible-nav');
        burger.classList.remove('anim');
    }
    // nav.classList.toggle('visible-nav');
})
// burgerNav.addEventListener('click', () => { 
//     burgerNav.classList.toggle('anim');
//     // nav.classList.toggle('visible-nav');
// })

