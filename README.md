# Landing Page Project

## Javascript  

The app.js file was first linked to the html file.
Javascript was use to build the functionality of the website.  
A dynamic navigation was created by creating a function for the list items.  
the list items are the  different sections.
A for loop is used to execute the function, so that, for every section added,  
it will dynamically be added to the navigation.

### Distinguishing the sections in view

To add the functionality of distinguishing the sections in active state,  
the relative position and size of the sections in viewport was gotten by using the   
element.getBoundingClientRect.  
the classList method was used to remove and add active class.
addEventListener was also used to listen to the event of a section becoming active.  

### Scrolling to appropriate page when link is clicked

To add this functionality, a variable was created for the links on the navigation and an event listener was used to listen for a click event on the link which will cause the document to scroll down to the appropriate section clicked.  

## CSS

media query was used to make the website responsive.  
a few properties like the display, background color and allignment were adjusted.  

## HTML

The javascript and css was linked on the html file.  
A new section was added to the html file.
