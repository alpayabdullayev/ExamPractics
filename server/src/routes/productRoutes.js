import express from "express"
import { createProduct, deletePoruct, getAllProduct, getProductById } from "../controller/ProductController.js"

export const ProductRoutes=  express.Router()
ProductRoutes.get("/products",getAllProduct)
ProductRoutes.post("/products",createProduct)
ProductRoutes.get("/products/:id",getProductById)
ProductRoutes.delete("/products/:id",deletePoruct)