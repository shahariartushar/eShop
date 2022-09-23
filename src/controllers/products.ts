import express, { Application, Request, Response, NextFunction } from "express";

import Product from "../models/product";

const getAddPorduct: any = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

const getProducts: any = (req: Request, res: Response, next: NextFunction) => {
  const products = Product.fetchAll((products: any) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

export default { getAddPorduct, postAddProduct, getProducts };
