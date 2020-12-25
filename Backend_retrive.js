//Ques-9
var MongoClient = require('mongodb').MongoClient;
const { spawn }= require('child_process');
var url = "mongodb://localhost:27017/";
//let python;
MongoClient.connect(url, function(err,Client) {
  if (err) throw err;
  var db = Client.db("MovieDB");
  db.collection("movie").find({}).toArray(function(err, result) {
    if (err) throw err;
    //python=result;
    //console.log(python)
    //console.log(result);

    var childPython = spawn('python',['script1.py',JSON.stringify(result)]);
    childPython.stdout.on('data',(data)=>{
      console.log('stdout:'+data);
    });
    childPython.stderr.on('data',(data)=>{
      console.error('stderr: ${data}');
    });

    Client.close();
  });
});
//console.log(python);
