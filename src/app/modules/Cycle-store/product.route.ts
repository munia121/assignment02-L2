import express from "express";
import { productControllers } from "./product.controller";

const productRouter = express.Router()

productRouter.post('/create-product', productControllers.createProduct)
productRouter.get('/get-product', productControllers.getAllProduct)
productRouter.get('/:productId', productControllers.getSingleData)
productRouter.put('/:productId', productControllers.updateProduct)

export default productRouter 