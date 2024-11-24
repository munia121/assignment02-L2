import express, { Application, Request, Response } from "express";
import cors from "cors";
import productRouter from "./app/modules/Cycle-store/product.route";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/product', productRouter)


app.get("/", (req: Request, res: Response) => {
 
  res.send('my server is running');
});

export default app; 
 