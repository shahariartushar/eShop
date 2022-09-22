import express, { Application, Request, Response, NextFunction } from "express";

import path from "path";
import productController from "../controllers/products";

const Router = express.Router();

// '/' => GET
Router.get("/", productController.getProducts);

export = Router;
