let navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

let ul = navBar.querySelector('ul');
let newListItem = document.createElement('li');
let textNode = document.createTextNode('Logout');
newListItem.appendChild(textNode);
ul.appendChild(newListItem);

let firstItemText = ul.firstElementChild.textContent;
let lastItemText = ul.lastElementChild.textContent;

console.log('First item text: ', firstItemText);
console.log('Last item text: ', lastItemText);
