// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML=new Date().getFullYear();

// ********** close links ************
const linksHolder = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener('click', function(){
    // linksHolder.classList.toggle("show-links");

    const containerHeight = linksHolder.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight === 0){
        linksHolder.style.height = `${linksHeight}px`;
    }
    else{
        linksHolder.style.height = 0;
    }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

// ********** fixed navbar ************
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    }
    else{
        topLink.classList.remove('show-link');
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link){

    link.addEventListener('click', function(event){
        // prevent default
        event.preventDefault();
        //navigate to specific spot
        const id = event.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        //calculating height
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksHolder.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav');
        
        let position = element.offsetTop-navHeight;

        if(!fixedNav){
            position = position-navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }
        console.log(position);
        window.scrollTo({
            left:0,
            top:position,
        });
        linksHolder.style.height = 0;

    });
});
