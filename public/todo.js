var todolist = [];

console.log("hello",todolist);

// TODO CLASS
function Todo(todo){
  this.todo = todo;
  this.check = false;
}


// Function To Add Todo
function addTodo(){
  var text = document.getElementById("my").value;
  if(text == "")
  alert("Empty Input Field");
  else {
    func1();
  }
}


// Function To Create new Todo Object and add it to the todolist
function func1(){
console.log("func1");
  var text = document.getElementById("my").value;
  var list = document.getElementById("todolist");
  let todo = new Todo(text);
console.log("func1.....",todolist);
  todolist.push(todo);
console.log("func1",todolist);
  refresh(todolist);
  document.getElementById("my").value="";
  transferData();
}


//Function to display the updated result
function refresh(todolist1){
// if(!todolist)
// {
// todolist = []
// }
// else{
// todolist = todolist;
// }
todolist = todolist1;
console.log("yipaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaap",todolist);
  var list = document.getElementById("todolist");
  var ui = document.createElement('ui');
  for(var i=0;i<todolist.length;i++)
  {
    var li =document.createElement('li');
    li.innerText = todolist[i].todo;
    li.className = "list-group-item";
    li.style.fontSize = "30px";
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.className= "filled-in form-check-input";
    x.className="radio-inline";
    x.style.margin="10px";
    x.style.width="30px";
    x.style.height= "30px";
    if(JSON.parse(todolist[i].check))
    {
      x.click();
      li.innerHTML = (todolist[i].todo).strike();
      li.style.color="#e8773f";
      li.style.backgroundColor="#F7F7F4";
      //li.setAttribute("style",'background-color:#F7F7F4;');
    }
    x.id=i;
    li.prepend(x);
    var down = document.createElement('i');

    //down.innerText = "DOWN";
    down.className = "fas fa-hand-point-down fa-2x";
    down.id = i;
    down.style.marginLeft="5px";
    down.style.float = "right";
    down.style.color = "#fc8145";
    li.appendChild(down);
    down.addEventListener("click", moveDown);

    var up = document.createElement('i');
    //up.innerText = "UP";
    up.id = i;
    up.className = "fas fa-hand-point-up fa-2x";
    up.style.marginLeft="20px";
    up.style.float = "right";
    up.style.marginRight="5px";
    up.style.color = "#82c91e";
    li.appendChild(up);
    up.addEventListener("click", moveUp);

    if(i==(todolist.length)-1)
    {
       down.style.display = "none";
       up.style.marginRight="47px";
    }
    if(i==0 )
    {
       up.style.display = "none";
    }
    x.addEventListener("click", markDone);
    ui.appendChild(li);
  }
//console.log("hell",list);
  if(list.lastChild)
  {
    list.removeChild(list.lastChild);
  }

  list.appendChild(ui);
}


// To move up the todo
function moveUp(){
  var temp = todolist[this.id];
  todolist[this.id] = todolist[this.id - 1];
  todolist[this.id-1]=temp;
  //console.log(todolist);
  localStorage.setItem("todolist", JSON.stringify(todolist));
  refresh(todolist);
  transferData();
}


//to move down the todo
function moveDown(){
  //console.log(todolist);
  var temp = todolist[this.id];
  todolist[this.id] = todolist[parseInt(this.id) + 1];
  todolist[parseInt(this.id) + 1]=temp;
  //console.log(todolist);
  //localStorage.setItem("todolist", JSON.stringify(todolist));
  refresh(todolist);
  transferData();
}


//marking done or undone of todo
function markDone(){
  var todo =  todolist[this.id];
  //console.log(todo);
  if(JSON.parse(this.checked))
  {
    //console.log("yoooooooo");
    todo.check = true;
  }
  else {
    todo.check=false;
  }
  //localStorage.setItem("todolist", JSON.stringify(todolist));
  refresh(todolist);
  transferData();
}


//Delete All Checked Todo
function deleteTodo(){
  for(var i=0;i<todolist.length;i++)
  {
    if(JSON.parse(todolist[i].check))
    {
      todolist.splice(i,1);
      //console.log(todolist);
      i=i-1;
    }
  }
  //localStorage.setItem("todolist", JSON.stringify(todolist));
  refresh(todolist);
  transferData();
}


//Sort the Todo's Unchecked First Then Checked
function sort(){
  todolist.sort(function(a, b){
    return JSON.parse(a.check)-JSON.parse(b.check)
  })
  //localStorage.setItem("todolist", JSON.stringify(todolist));
  refresh(todolist);
  transferData();
}
//window.onload(refresh());
