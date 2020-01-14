
var todos = ["Play games"] ;
var input = prompt ("What would you like to do?");

while(input !=="quit"){
    //handle input
    if (input === "list") {
    	listTodos();
    } else if (input === "new") {
	    addTodo();
    } else if (input === "delete") {
    	deleteTodo();
    }
	//ask again for new input
	input = prompt ("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP!");


function listTodos() {
	console.log("**********")
    todos.forEach(function(item, index) {
       console.log(index + ": " + item);
    });
    console.log("**********") 
}


function addTodo() {
	//ask for new todo   
	var newTodo = prompt ("Enter new to do");
	//add to todo array
    todos.push(newTodo);
    console.log("Successfully added todo!");
}


function deleteTodo() {
	//ask for index of to do to be deleted
    var deletingIndex = prompt("Enter index of todo to delete?");
    //delete that todo
    //splice()
    todos.splice(deletingIndex,1);
    console.log("Successfully deleted todo!");
}