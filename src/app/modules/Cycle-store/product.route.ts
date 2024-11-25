import express from "express";
import { productControllers } from "./product.controller";

const productRouter = express.Router();

productRouter.post("/", productControllers.createProduct);
productRouter.get("/", productControllers.getAllProduct);
productRouter.get("/:productId", productControllers.getSingleData);
productRouter.put("/:productId", productControllers.updateProduct);
productRouter.delete("/:productId", productControllers.deleteProduct);

export default productRouter;
