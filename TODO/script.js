
const toDoList=document.getElementById("todoList");
const newTodoInput=document.getElementById("newtodo");
const addTodoBtn=document.getElementById("addToDoBtn");

addTodoBtn.addEventListener("click",function(){
    const newTodoText=newTodoInput.ariaValueMax;

    if(newTodoText!==""){
        const newTodoItem = document.createElement("li");
        newTodoItem.textContent=newTodoText;
        const deleteTodoBtn=document.createElement("button");
        deleteTodoBtn.innerText="X";

        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.classList.addEventListener("click", function(){
            deleteTodoItem(deleteTodoBtn);
        })
    }
})