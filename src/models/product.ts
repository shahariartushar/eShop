import fs from "fs";
import path from "path";

const viewPath = path.join(__dirname, "../data");
const productFile = path.join(viewPath, "products.json");

const getProductFromFile = (cb: any) => {
  fs.readFile(productFile, (err, fileContent: any) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

class Product {
  title: string;

  constructor(title: any) {
    this.title = title;
  }
  save() {
    getProductFromFile((products: any) => {
      products.push(this);
      fs.writeFile(productFile, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb: any) {
    getProductFromFile(cb);
  }
}

export = Product;
