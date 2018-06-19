const express = require('express')
const csv=require('csvtojson')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))




app.get('/getdata', (req, res) => {
let  file_path = './out.csv';
if(file_path)
{
  csv()
  .fromFile('./out.csv')
  .then((jsonObj)=>{
    res.send(jsonObj);
  })
}
else {
  res.send("[]");
}
})

app.use('/home', express.static(__dirname + '/public'));

app.post('/add', (req, res) => {
  var csvWriter = require('csv-write-stream');
  var fs =require('fs')
  var writer = csvWriter({ headers: ["todo" , "check"]})
  writer.pipe(fs.createWriteStream('out.csv'));
  let todolist = req.body["todolist"];
if(todolist)
{
  for(todos of todolist)
  {
    let todo = todos["todo"];
    console.log(todos);
    let check = todos["check"];
console.log("check",check);
    writer.write({ todo , check });
  }
  writer.end();
}
res.send("");
})

app.listen(2323, function () {
  console.log('Server started on http://localhost:2323/')
})
