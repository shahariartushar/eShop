import express, { Application, Request, Response, NextFunction } from "express";

import path from "path";

import { product as adminProduct } from "./admin";

const Router = express.Router();

// '/' => GET
Router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(adminProduct);
  //res.sendFile(path.join(__dirname, "../" ,"views", "shop.html"));
  res.render("shop", {
    prods: adminProduct,
    pageTitle: "Shop",
    path: "/",
    hasProducts: adminProduct.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

export = Router;
