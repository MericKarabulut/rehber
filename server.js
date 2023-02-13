const express = require('express');
const db = require("./connection");

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Get');

});

// app.get('/print/:name', (req, res) => {

//     var printLine = req.params.name
//     var url = req.baseUrl

// });

app.post('/', (req, res) => {
 
    res.send("Hello post")
});

db.sync()
  .then(() => {
    console.log("Synced db.");
    
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });

  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

 