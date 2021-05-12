// console.log(document.getElementById("string-3"))
// console.log(document.getElementById("string-5"));
// console.log(document.getElementById("string-2"));
// console.log(document.getElementById("string-6"));
// console.log(document.getElementById("string-4"));
// console.log(document.getElementById("string-1"));

// let colorElem = document.getElementsByClassName('element');

// colorElem[0].style.backgroundColor = 'red';
// colorElem[1].style.backgroundColor = "red";
// colorElem[2].style.backgroundColor = "red";
// colorElem[3].style.backgroundColor = "green";
// colorElem[4].style.backgroundColor = "green";
// colorElem[5].style.backgroundColor = "green";


/////////////////////////////////////////////////////////////////////////////////

// var tasks = [
//   "Buy lemonade",
//   "Make toasts",
//   "Repair car",
//   "Play games",
//   "Pet a cat",
// ];

// for (let i = 0; i < tasks.length; i++) {
//   let ol = document.querySelector("#todo-list");
//   let li = document.createElement("li");
//   li.innerHTML = tasks[i];
//   ol.append(li);
// }


// let ol = document.querySelector('#todo-list');

// let nodes = tasks.map((el) => {
//     let li = document.createElement('li');
//     li.textContent = el;
//     return li
// })

// ol.append(...nodes);

//////////////////////////////////////////////////////////////////////////////////

// document.querySelectorAll("p").forEach((elem) => {
//   elem.insertAdjacentHTML("afterend", "<hr/>");
// });

// let p = document.querySelectorAll("p");

// for (let i = 0; i < p.length; i++) {
//     p[i].insertAdjacentHTML('afterend', '<hr/>')
// }

//////////////////////////////////////////////////////////////////////////////////////


// let ul = document.createElement('ul');
// document.body.appendChild(ul)
 
// while (true) {
//     let data = prompt('Введите содержимое пункта', '');

//     if (data === null) {
//         break;
//     }

//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(data));
//     ul.appendChild(li);
// }


/////////////////////////////////////////////////////////////////////////////////////////

// let parent = document.querySelector('#parent');

// let fruits = ['Lemon', 'Juice', 'Apple', "Banana", "Pineapple", "Waterlemon", 'Orange']

// for (let i = 0; i < fruits.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = fruits[i]
//     parent.appendChild(li)
// }

//////////////////////////////////////////////////////////////////////////////////////