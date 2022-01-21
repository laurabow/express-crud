import express from "express";
import logger from "morgan";
import products from "./Products/products.js";
const app = express();
// server set up in env file, if it's not there it'll default to the 3000
const PORT = process.env.PORT || 3000;

// middle wear...the roots will use these things:
// these go above the app.get stuff!
app.use(express.json());
app.use(logger("dev"));

// home route:
app.get("/products", (req, res) => {
  res.json(products);
});

// Show route:
app.get("/products/:id", (req, res) => {
  // console.log(req.params);
  const id = req.params.id;
  const product = products.find(product => product._id === id );
  res.json(product);
});

// Create Product:
app.post("/products", (req, res) => {
  // console.log(req.body);
  // body of the request the client is making:
  const newProduct = req.body;
  // this adds dollar sign to the price of the newly created product:
  newProduct.price = `$${req.body.price}`;
  console.log(newProduct);
  // push adds the created product to the body..the products array
  products.push(newProduct);
  res.json(products);
})

// Update product:
app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  // findIndex finds the index that matches the id
  const productIndex = products.findIndex(product => product._id === id);

  const updatedProduct = {
    ...products[productIndex],
    _id: req.body._id,
    name: req.body.name,
    imgUrl: req.body.imgUrl,
    description: req.body.description,
    price: req.body.price,
  };
// remove and replace with updated product
  products.splice(productIndex, 1, updatedProduct);
  res.json(updatedProduct);
});

// Delete:
app.delete("/products/:id", (req, res) => {
	const id = req.params.id;
	const productIndex = products.findIndex(product => product._id === id);

	const deletedProduct = products.find(p => p._id === id);
	console.log(deletedProduct);

	products.splice(productIndex, 1);
	res.json(products);
});


app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});