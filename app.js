//getElementsByclassName//

// var items= document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.backgroundColor = 'green';    //change bg color of 2nd item to green

//querySelector//
 
var header = document.querySelector('#main-header');

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';  //change text color of 2nd item to green

//queryselectAll

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd)'); //css selector
// for (var i =0; i<odd.length ; i++)
// {
//     odd[i].style.backgroundColor = 'green';

// }
