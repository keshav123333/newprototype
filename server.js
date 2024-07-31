const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

let products = [];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json(product);
});
app.get("/product",(req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
