import express, { Application, Request, Response, NextFunction } from "express";

import path from "path";

const router = express.Router();

const product: any = [];

// '/admin/add-product '=> GET
router.get(
  "/add-product",
  (req: Request, res: Response, next: NextFunction) => {
    //res.sendFile(path.join(__dirname, "../" ,"views", "add-product.html"));
    res.render("add-product", {
      pageTitle: "Add Product",
      path: "admin/add-product",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  }
);

// '/admin/add-product' => POST
router.post(
  "/add-product",
  (req: Request, res: Response, next: NextFunction) => {
    product.push({ title: req.body.title });
    res.redirect("/");
  }
);

export { router, product };
