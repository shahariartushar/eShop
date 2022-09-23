import express, { Application, Request, Response, NextFunction } from "express";

import path from "path";
//import { getAddPorduct as getAddPorductController } from "../controllers/products";
import productController from "../controllers/products";

const router = express.Router();

// '/admin/add-product '=> GET
router.get("/add-product", productController.getAddPorduct);

// '/admin/add-product' => POST
router.post("/add-product", productController.postAddProduct);

export default router;
