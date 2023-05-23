

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
  
  =======================================================================================================
  
  //Adding and deleting new list elements 
  
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

    // Create edit button element
    var editBtn = document.createElement('button');

    // Add classes to edit button
    editBtn.className = 'btn btn-danger btn-sm float-right edit';            //deliverable 2
  
    // Append text node
    editBtn.appendChild(document.createTextNode('+'));
  
    // Append button to li
    li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}




// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;                                      //deliverable 1
      itemList.removeChild(li);
      
      
 //=======================================================================================/task 9/17//
      
 // getting  description from  the form 
     
  var newItem = document.getElementById('item').value;
  var desc = document.getElementById('description').value;
      
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createTextNode(desc));

  
//filtering and searching
//Filter event
filter.addEventListener('keyup', filterItems);
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

      
      
      
      
    }

