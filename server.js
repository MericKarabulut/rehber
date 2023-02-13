const express = require('express');
const db = require("./connection");
const cors = require("cors")

const userRoutes = require("./routes/userRoutes")

const { User } = require("./models/User");
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello Get');

});

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRoutes);

// app.get('/print/:name', (req, res) => {

//     var printLine = req.params.name
//     var url = req.baseUrl

// });
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

 