(function(){
 $.get('/getdata',refresh);
})();


function transferData(){
console.log("psot",todolist);
  $.post(
    '/add',
    {
       todolist
    }
  )
}
