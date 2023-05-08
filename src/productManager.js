import fs from 'fs';

export default class ProductManager{
    constructor(){
        if(!fs.existsSync('./products.json')){
            fs.writeFileSync('./products.json', JSON.stringify([]));
        }
    }

    async addProduct(product){
        try {
            const actualProd = await this.getProducts();
            actualProd.push(product);
            await fs.promises.writeFile(
                './products.json',
                JSON.stringify(actualProd)
            );
        } catch (error) {
            console.log('No se pueden agregar productos');
        }
    }

    async getProducts(){
        try {
            const actualProd = await fs.promises.readFile(
                './products.json'                
            );
            return JSON.parse(actualProd);
        } catch (error) {
            console.log('No se pueden mostrar productos');
        }
    }
    
}

const products = new ProductManager();

const test = async () =>{
    
    try {
       
        console.log(await products.getProducts());
    } catch (error) {
        console.log(error);
    }
};

test();