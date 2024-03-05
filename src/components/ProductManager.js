import { promises as fs } from "fs"

export default class ProductManager {
    constructor() {
        this.path = "./productos.txt"
        this.products = []
    }

    static id = 0

    addProduct = async (title, description, price, thumbnail, code, stock) => {


        ProductManager.id++

        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.id
        }

        this.products.push(newProduct)

        await fs.writeFile(this.path, JSON.stringify(this.products))
    }


    readProducts = async () => {
        let respuesta = await fs.readFile(this.path, "utf8")
        return JSON.parse(respuesta)
    }

    getProducts = async () => {
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2);

    }


    getProductsById = async (id) => {

        let respuesta3 = await this.readProducts()
        if (!respuesta3.find(product => product.id === id)) {
            console.log("Producto no encontrado");
        } else {
            console.log(respuesta3.find(product => product.id === id));
        }



    }

    deleteProductById = async (id) => {
        let respuesta3 = await this.readProducts()
        let productFilter = respuesta3.filter(products => products.id != id)


        await fs.writeFile(this.path, JSON.stringify(productFilter))
    }


    updateProducts = async () => {
       //Se me complico este
    }

}

//const productos = new ProductManager()

// productos.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)
// productos.addProduct("Producto prueba2", "Este es un producto prueba2", 300, "Sin imagen2", "abc1234", 50)
// productos.addProduct("Producto prueba3", "Este es un producto prueba3", 400, "Sin imagen3", "abc12345", 100)
// productos.addProduct("Producto prueba4", "Este es un producto prueba4", 500, "Sin imagen4", "abc123456", 150)
// productos.addProduct("Producto prueba5", "Este es un producto prueba5", 600, "Sin imagen5", "abc1234567", 200)

// productos.getProducts()

//productos.getProductsById(4)

// productos.deleteProductById(5)

// productos.updateProducts({
//     title: 'Producto prueba2',
//     description: 'Este es un producto prueba2',
//     price: 3000,
//     thumbnail: 'Sin imagen2',
//     code: 'abc1234',
//     stock: 50,
//     id: 2
// })