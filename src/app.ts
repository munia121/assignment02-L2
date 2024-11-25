import express, { Application, Request, Response } from "express";
import cors from "cors";
import productRouter from "./app/modules/Cycle-store/product.route";
import orderRouter from "./app/modules/order-cycle/order.route";
import genericErrorHandler from "./Error/errorHandle";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("my server is running");
});

app.use(genericErrorHandler);

export default app;
