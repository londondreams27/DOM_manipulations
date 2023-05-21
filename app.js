

// code to traverse the DOM 


// Traversing the DOM //  task 7/17

//var itemList = document.querySelector('#items');

//parentNode property

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentNode and parentElement can be used interchangeably

//  console.log(itemList.parentElement);
//  itemList.parentElement.style.backgroundColor = '#f4f4f4';
//  console.log(itemList.parentElement.parentElement.parentElement);

//childNode
//console.log(itemList.childNodes); //it also counts the white space or ine spaces in the html file(returns node list)

//use children instead
// console.log(itemList.children); //returns an html collection
// console.log(itemList.children[1]);

//firstChild//
// console.log(itemList.firstChild); // also counts any line breaks and white spaces

//firstElementChild
// console.log(itemList.firstElementChild); //returns the actual list item
// itemList.firstElementChild.textContent = 'Hello 1';


// //lastChild//
// // console.log(itemList.lastChild); // also counts any line breaks and white spaces

// //lastElementChild
// console.log(itemList.lastElementChild); //returns the actual list item
// itemList.lastElementChild.textContent = 'Hello 4';

// //nextsibling
// //console.log(itemList.nextSibling); // returns Null if no next sibling is there
// //nextElemntSibling
// console.log(itemList.nextElementSibling);

// //previoussibling
// //console.log(itemList.previousSibling); // returns Null if no next sibling is there
// //previousElemntSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.getElementsByClassName.color = 'green';


//createElement - add Hello World before item Lister 

//create a div
// var newDiv = document.createElement('div');

// //add class
// newDiv.className  = 'Hello';

// //add id
// newDiv.id = 'hello1';

// //add attribute
// newDiv.setAttribute('title','Hello Div');

// //create text node
// var newDivText = document.createTextNode('HEllo World');

// //add text to div
// newDiv.appendChild(newDivText);

// //inserting in the DOM

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// container.insertBefore(newDiv, h1);

===============================================================================================
// Add hello World before Item1 
// //create a new class 
// var newItem = document.createElement('class');

// //add id
// newItem.id = 'hello1';

// //add attribute
// newItem.setAttribute('title','Hello Div');

// //create text node
// var newItemText = document.createTextNode('HEllo World');

// //add text to item
// newItem.appendChild(newItemText);

// //inserting in the DOM 

// var item = document.querySelector('ul .list-group');
// var li = document.querySelector('li');

// console.log(newItem);

// itemList.insertBefore(newItem, li);

