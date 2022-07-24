/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
    //store the nav ul and all sections in variables//
    const navigationId= document.getElementById('navbar__list');
    const allSections= document.querySelectorAll('section');

    //loop over all sections on the page using the 'for' loop//
    for(section of allSections){
    //create the li element for each link//
    const liItemElement= document.createElement('li');

    //store the id of each section and the name(data-nav) of the sections in variables//
    const allSectionsLink= section.getAttribute('id');
    const allSectionsName= section.getAttribute('data-nav');

    //use innerHTML to attach an anchor tag to the li item already created// 
    liItemElement.innerHTML += `<a href="#${allSectionsLink}" class="menu__link">${allSectionsName}</a>`

    //attach the new li item to the ul on the navbar//
    navigationId.appendChild(liItemElement);    
    };
    //(Jul 10, 2022) https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML//
    //(May 30, 2022) https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute//

    //to set an element in viewport, firt test if the element is in viewport amd get all bounding coordinates of a section// 
    let activeSections=section.getBoundingClientRect();
    console.log(activeSections);

    //add an event listener to listen for when the page is being scrolled//
    document.addEventListener('scroll', function(){
    let allSectionInPage= document.querySelectorAll('section');

    //loop over all sections on the page and add a conditional statement to be executed when the element is in the viewport//
    for(activeSections of allSectionInPage){
    if(activeSections.getBoundingClientRect().top >= -500 &&
    activeSections.getBoundingClientRect().top<= 300 &&
    activeSections.getBoundingClientRect().bottom <= 3000) 
    { 
    //add class when element is in viewport, else remove class//
    activeSections.classList.add('active_sectioninview')
    } else{
    activeSections.classList.remove('active_sectioninview');
    }
    }   
    });
    //(June 4, 2022) https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect//

    //to implement the smooth scrolling behaviour, store the class of the links in a variable//
    const allLinks= document.querySelectorAll('.menu__link');

    //loop over each section and add an event listener to listen for any of the links is clicked//
    allLinks.forEach(allLink =>{
    allLink.addEventListener('click', function (scrollPage){
    scrollPage.preventDefault();
    const linkHref= allLink.getAttribute('href');

    //use the scrollintoview function to add the smooth scroll behaviour//    
    document.querySelector(linkHref).scrollIntoView({behavior: 'smooth'})
    });
    });
    //(May 30, 2022) https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView//

    //to add active state to the links when clicked
    //Store all the menu links in a variable
    const mnuLnks= document.querySelectorAll('.menu__link');

    //Loop through all the links and add a click event to add an active class to the link when clicked
    for(const mnuLnk of mnuLnks) {
    mnuLnk.addEventListener('click', function(){

    //loop over the links to remove active class from previous link
    mnuLnks.forEach(each => each.classList.remove('active'));

    //add active class to clicked link
    mnuLnk.classList.add('active');
    });  
    };