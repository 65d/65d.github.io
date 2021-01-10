const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.getElementById('buttonClear');
const input = document.getElementById('item');
const notFound = document.getElementById('center');
var sortedArray = [];
var last;
//let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

//localStorage.setItem('items', JSON.stringify(itemsArray));
//const data = JSON.parse(localStorage.getItem('items'));
//console.log(data[0]);
const liMaker = (text) => {
  const li = document.createElement('li');
  li.innerHTML = (`<span>${text}</span> <div class="butns"> <button onclick="Remove();">Delete</button> </div>`);

  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  last = localStorage.length + 1;
  e.preventDefault();

  //itemsArray.push(input.value);
  //localStorage.setItem('items', JSON.stringify(itemsArray));
  localStorage.setItem(last, input.value);
  liMaker(input.value);
  input.value = "";
  if(localStorage.length != 0){
    notFound.classList.add("hidden-n");
  } else {
    notFound.classList.remove("hidden-n");
  }
});

if(localStorage.length != 0){
  notFound.classList.add("hidden-n");
} else {
  notFound.classList.remove("hidden-n");
}

function SortLocalStorage(){
  if(localStorage.length > 0){
     var localStorageArray = new Array();
     for (i=0;i<localStorage.length;i++){
         localStorageArray[i] = localStorage.key(i)+localStorage.getItem(localStorage.key(i));
     }
  }
  var sortedArray = localStorageArray.sort();
  return sortedArray;
}
var x = [].sort();
var n = 0;
for(var g=0, len=localStorage.length; g<len; g++) {
  // console.log(localStorage.getItem(localStorage.key(i)));
  n + 1;
  x.push(g);
  console.log(g);

  // var key = localStorage.key(i);
  // var value = localStorage[key];
  // console.log(key + " => " + value);
  
  liMaker(localStorage.getItem(g+1));
  console.log(localStorage.getItem(localStorage.key(x)));
}

var num = 0;
function Remove() {
  
  for(var x=1, len=localStorage.length; x<len; x++) {
    num++;
    
  }
  console.log(localStorage.key(num));
  // localStorage.removeItem(g+1);
 
}

// function Remove() {
//   var ll = [];
//   localStorage.removeItem(g+1);
//   console.log(g+1)
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild);
//   }

//   for(var g=0, len=localStorage.length; g<len; g++) {
//     // console.log(localStorage.getItem(localStorage.key(i)));
 
//     ll.push(localStorage.getItem(g+1));

  
//     // var key = localStorage.key(i);
//     // var value = localStorage[key];
//     // console.log(key + " => " + value);
    
    
//     //console.log(localStorage.getItem(localStorage.getItem(g+1)));
//   }
//   for(var g=0, len=localStorage.length; g<len; g++) {
//     localStorage.setItem(g+1, ll[g]);
//   }
//   console.log(ll);
  
//   for(var g=0, len=localStorage.length; g<len; g++) {
//     liMaker(localStorage.getItem(g+1));
//   }
// }

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
  if(localStorage.length != 0){
    notFound.classList.add("hidden-n");
  } else {
    notFound.classList.remove("hidden-n");
  }
});
// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// const input = document.getElementById('item');
// var sortedArray = [];
// var last;
// //let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// //localStorage.setItem('items', JSON.stringify(itemsArray));
// //const data = JSON.parse(localStorage.getItem('items'));
// //console.log(data[0]);
// const liMaker = (key) => {
//   const li = document.createElement('li');
//   li.innerHTML = (`<span>${key}</span> <div class="butns"> <button>Archive</button> <button onclick="localStorage.removeItem(JSON.parse(window.localStorage.getItem(${text})));">Delete</button> </div>`);

//   ul.appendChild(li);
// }

// form.addEventListener('submit', function (e) {
//   last = localStorage.length + 1;
//   e.preventDefault();

//   //itemsArray.push(input.value);
//   //localStorage.setItem('items', JSON.stringify(itemsArray));
//   localStorage.setItem(last, input.value);
//   liMaker(input.value);
//   input.value = "";
  
// });

// // function SortLocalStorage(){
// //   if(localStorage.length > 0){
// //      var localStorageArray = new Array();
// //      for (i=0;i<localStorage.length;i++){
// //          localStorageArray[i] = localStorage.key(i)+localStorage.getItem(localStorage.key(i));
// //      }
// //   }
// //   var sortedArray = localStorageArray.sort();
// //   return sortedArray;
// // }

// // for(var i=0, len=localStorage.length; i<len; i++) {
// //   // console.log(localStorage.getItem(localStorage.key(i)));

// //   // var key = localStorage.key(i);
// //   // var value = localStorage[key];
// //   // console.log(key + " => " + value);
  
// //   liMaker(sortedArray.value);
// //   console.log(sortedArray);
// // }

// // var key;
// // var mass_elemets;

// for (var i = 0; i<localStorage.length; i++){
//   key = localStorage.key(i);
//   mass_elemets = localStorage.getItem(key);
// }
//   mass_elements = mass_elemets.sort(function (a, b) {
//   return parseInt(a, 10) - parseInt(b, 10);
//   }).reverse();

// for (var i = 0; i<localStorage.length; i++){
//   key = localStorage.key(i);
//   //document.getElementById('high_score').innerHTML += key + mass_elemets[i];
//   liMaker(key);
// }

// button.addEventListener('click', function () {
//   localStorage.clear();
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild);
//   }
//   itemsArray = [];
// });
