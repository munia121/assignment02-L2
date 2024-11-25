import { model, Schema } from "mongoose";
import { IProduct } from "./Cycle-store/product.interface";
import { IOrder } from "./order-cycle/order.interface";

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    type: {
      type: String,
      required: true,
      enum: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    product: {
      type: String,

      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

const productModel = model<IProduct>("Product", productSchema);
const orderModel = model<IOrder>("Order", orderSchema);

export const ModelsSchema = {
  productModel,
  orderModel,
};
