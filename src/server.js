import express from "express"
import ProductManager from "./components/ProductManager.js"

const app = express()
app.use(express.urlencoded({ extended: true }))

const productos = new ProductManager()

//const readProducts = productos.readProducts()

// app.get("/products", async (req, resp) => {

//     let limit = parseInt(req.query.limit)
//     if (!limit) return resp.send(await readProducts)


//     let allProducts = await readProducts
//     let productLimit = allProducts.slice(0, limit)


//     resp.send(productLimit);
// })

/*-------------------------------*/

app.get("/products", async (req, resp) => {
    resp.send(await productos.getProducts());
});

// app.get("/products/:id", async (req, resp) => {
//     let id = parseInt(req.params.id)
//     let allProducts = await readProducts
//     let productById = allProducts.find(product => product.id === id)
//     resp.send(productById)
// }) 

/*--------------------------------------*/ 

app.get("/products/:id", async (req, resp) => {
    let id = parseInt(req.params.id);
    resp.send(await productos.getProductsById(id));
});

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Express por Local Host ${server.address().port}`);
})

server.on("error", (error) => {
    console.log(`Error el servidor ${error}`);
})