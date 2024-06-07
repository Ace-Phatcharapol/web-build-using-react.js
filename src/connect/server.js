const express = require('express');
const mongodb = require('mongodb');
const app = express();
const port = 3000;

const MongoClient = mongodb.MongoClient;
const url = "mongodb+srv://phatcharapol2:<password>@onlineshop.czhkqxm.mongodb.net/?retryWrites=true&w=majority&appName=OnlineShop";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database connected!");
  db.close();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});