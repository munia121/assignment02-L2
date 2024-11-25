import express from "express";
import { orderControllers } from "./order.controllers";

const orderRouter = express.Router();

orderRouter.post("/", orderControllers.createdOrder);
orderRouter.get("/revenue", orderControllers.calculateRevenue);

export default orderRouter;
