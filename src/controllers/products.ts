import express, { Application, Request, Response, NextFunction } from "express";

const products: any = [];

const getAddPorduct: any = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //res.sendFile(path.join(__dirname, "../" ,"views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

const postAddProduct: any = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};


const getProducts : any = (req: Request, res: Response, next: NextFunction) => {
    console.log(products);
    //res.sendFile(path.join(__dirname, "../" ,"views", "shop.html"));
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  }

export default { getAddPorduct, postAddProduct, getProducts };
