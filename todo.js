// let todoList = [
//   {
//     item: 'Life of Pi',
//     dueDate: '12/09/2024',
//   },
//   {
//     item: 'type code',
//     dueDate: '13/15/2024',
//   }
//   ];

// displayItems();

// function addTodo() {
 
//   let inputElement = document.querySelector
//     ('#todo-input');
//   let dateElement = document.querySelector
//     ('#todo-date');

//   let todoItem = inputElement.value;;
//   let todoDate = dateElement.value;
//   todoList.push({ item: todoItem, dueDate: todoDate });
//   inputElement.value = '';
//   dateElement.value = '';

//   displayItems();

// }


// function displayItems() {
 
//   let containerElement = document.querySelector('.todo-container');
    
//   let newHtml = '';

//   for (let i = 0; i < todoList.length; i++) {
 
//      let {item,dueDate} = todoList [i];
//     // console.log(item, dueDate)
//     newHtml += `
//      <span>${item}</span>
//      <span>${dueDate}</span>
//      <button class = 'btn-delete' onClick="todoList.splice (${i},1);
//      dispalyItem;">Delete</button>
//      `;
//   }
//   containerElement.innerHTML = newHtml;
// }

 


 let todoList = JSON.parse(localStorage.getItem('todoList')) || [
  {
    item: 'Life of Pi',
    dueDate: '12/12/2024'
  },
  {
    item: '4ex trading',
    dueDate: '10/01/2025'
  },
  {
    item: 'GROWW STOCKS',
    dueDate:'12/06/2025'
  }, 
  {
    item: ' Ritam To Do',
    dueDate:'12/06/2025'
  } 
];


displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  if (todoItem && todoDate) {
  todoList.push({item: todoItem, dueDate: todoDate});
  localStorage.setItem('todoList', JSON.stringify(todoList)); 
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
} else {
  alert('Please enter both a task and a due date.');
}
}


function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="todoList.splice(${i}, 1);
      displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
function deleteTodo(index) {
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));  
  displayItems();
}

 




      //  AnalyserNode.alert("Please fill out both fields.");
      
    
  


 
// function calculateTax(amount, taxRate) {
//   return amount * (taxRate / 100);
// }

 
// let itemCost = 100;  
// let taxRate = 5; 
// let totalTax = calculateTax(itemCost, taxRate);
// console.log(`Total Tax: $${totalTax}`);



// function addTodo() {
//   let inputElement = document.querySelector('#todo-input');
//   let dateElement = document.querySelector('#todo-date');
//   let todoItem = inputElement.value;
//   let todoDate = dateElement.value;
//   todoList.push({item: todoItem, dueDate: todoDate});
//   localStorage.setItem('todoList', JSON.stringify(todoList)); 
//   inputElement.value = '';
//   dateElement.value = '';
//   displayItems();
//  AnalyserNode.alert("Please fill out both fields.");
// } 












// let todoList = JSON.parse(localStorage.getItem('todoList')) || [
//   {
//     item: 'Buy Milk',
//     dueDate: '4/10/2023'
//   },
//   {
//     item: 'Go to College',
//     dueDate: '4/10/2023'
//   }
// ];

// displayItems();

// function addTodo() {
//   let inputElement = document.querySelector('#todo-input');
//   let dateElement = document.querySelector('#todo-date');
//   let todoItem = inputElement.value;
//   let todoDate = dateElement.value;

//   if (todoItem && todoDate) {
//     todoList.push({item: todoItem, dueDate: todoDate});
//     localStorage.setItem('todoList', JSON.stringify(todoList));  
//     inputElement.value = '';
//     dateElement.value = '';
//     displayItems();
  // } else {
  //   alert('Please enter both a task and a due date.');
  // }
// }

// function displayItems() {
//   let containerElement = document.querySelector('.todo-container');
//   let newHtml = '';
//   for (let i = 0; i < todoList.length; i++) {
//     let {item, dueDate} = todoList[i];
//     newHtml += `
//       <span>${item}</span>
//       <span>${dueDate}</span>
//       <button class='btn-delete' onclick="deleteTodo(${i})">Delete</button>
//     `;
//   }
//   containerElement.innerHTML = newHtml;
// }

// function deleteTodo(index) {
//   todoList.splice(index, 1);
//   localStorage.setItem('todoList', JSON.stringify(todoList));  
//   displayItems();
// }

 
// function calculateTax(amount, taxRate) {
//   return amount * (taxRate / 100);
// }

 
// let itemCost = 100;  
// let taxRate = 5; 
// let totalTax = calculateTax(itemCost, taxRate);
// console.log(`Total Tax: $${totalTax}`);















