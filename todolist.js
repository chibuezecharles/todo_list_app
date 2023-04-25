
let userInput = document.querySelector("#user_input");
const add_btn = document.querySelector(".add");
const details_container = document.querySelector(".details_container");



// add a to do list
const addTodo = (e) => {
    // e.preventDefault();
    let value = userInput.value;

    if(value !== ""){
        // create some elements.
        const details = document.createElement("div");
        const details_Text = document.createElement("p");
        const delete_btn = document.createElement("button");

        // add text to the elements created above.
        details_Text.textContent = value;
        delete_btn.innerHTML += '<i class="fa-solid fa-trash-can"></i>';
        
        // add some classes to the created elements.
        details.classList.add("details");
        details_Text.classList.add("details_text");
        delete_btn.classList.add("delete");

        //appending the created elements in their right places.
        details.appendChild(details_Text);
        details.appendChild(delete_btn);
        details_container.appendChild(details);
        
        //clear the input field
        userInput.value = "";

        
        //to delete the todo list
        const deleteTodo = () =>{
            details.remove();
        }

        // call the delete function when you click on the delete icon button.
        delete_btn.addEventListener("click", deleteTodo);
    }

}

// call the add function when you click on the add button.
add_btn.addEventListener('click', addTodo);



// add a todo list on pressing my enter button on my keyboard
userInput.addEventListener("keyup", (e) =>{

    if(e.key === "Enter"){
        addTodo();
    }
})

