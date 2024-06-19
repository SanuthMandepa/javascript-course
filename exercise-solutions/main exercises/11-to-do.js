const todoList = ['helo', 'hello'];
renderTodoList();


function renderTodoList(){
  let todoListHTML = '';

  for(let i =0;i<todoList.length;i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector('.js-todo-List').innerHTML = todoListHTML;
}

function addToDo(){
  const inputElement = document.querySelector('.js-todo-list');
  const name = inputElement.value; 
  todoList.push(name);
  console.log(todoList)

  inputElement.value = '';
  renderTodoList();
}