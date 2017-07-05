function createElement(tag,props,...children){
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => element[key]=props[key]);

    if(children.length > 0){
        children.forEach(child => {
            if(typeof child === 'string'){
                child =document.createTextNode(child);
        }

        element.appendChild(child);

    })
    }

    return element;
};

function createTodoItem(title){
    const checkbox = createElement('input',{type:'checkbox',className:'checkbox'});
    const label = createElement('label', {className:'title'},title);
    const editInput = createElement('input',{type:'text',className:'textfield'});
    const editButton = createElement('button',{className:'edit'},'Изменить');
    const deleteButton = createElement('button',{className:'delete'},'Удалить');
    const listItem = createElement('li',{className:'todo=item'},checkbox,label,editInput,editButton,deleteButton);

    bindEvents(listItem);
    return listItem;
}

function toggleTodoItem(event){
    const listItem = this.parentNode;
    listItem.classList.toggle('done');
}

function editTodoItem(){

    const listItem = this.parentNode;
    const title = listItem.querySelector('.title');
    const editInput = listItem.querySelector('.textfield');
    const isEdeting = listItem.classList.contains('edeting');

    if(isEdeting){
        title.innerText = editInput.value;
        this.innerText = 'Изменить';

        if(editInput.value===''){
            editInput.value='Task 1';
            title.innerText='Task 1'
            this.innerText = 'Сохранить';

            return alert('Вы ввели неверное имя задачи');
        }

    } else{

        editInput.value = title.innerText;
        this.innerText = 'Сохранить';



    }

    listItem.classList.toggle('edeting');

}

function deleteMessage(){

}

function deleteTodoButton(){
    const listItem = this.parentElement;
    todoList.removeChild(listItem);

}

function bindEvents(todoItem){
    const checkbox = todoItem.querySelector('.checkbox');
    const editButton = todoItem.querySelector('button.edit');
    const deleteButton = todoItem.querySelector('button.delete');

    checkbox.addEventListener('change',toggleTodoItem);
    editButton.addEventListener('click',editTodoItem);
    deleteButton.addEventListener('click',deleteTodoButton);
}

function addTodoItem(event){
    event.preventDefault();
    if(addInput.value === ''){
        return alert('Добавьте задачу пожалуйста');
    }
    const listItem = createTodoItem(addInput.value)
    todoList.appendChild(listItem);
    addInput.value = '';

}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');
 console.log(todoItems);

 function main(){
     todoForm.addEventListener('submit',addTodoItem);
     todoItems.forEach(item=>bindEvents(item));
 }
 main();

