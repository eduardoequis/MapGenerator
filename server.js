const express = require('express')
const app = express()
 
app.use(express.static(__dirname));

let index = __dirname + '/index_copy.html'
console.log(index)

app.get('/', function(req, res){
  res.sendFile(index);
});
 
app.listen(3000)

console.log("LISTEN to app")