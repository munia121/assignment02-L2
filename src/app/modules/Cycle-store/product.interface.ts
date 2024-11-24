import { ObjectId } from "mongoose";

// interfaces/Product.ts
export interface IProduct {
    name: string;
    brand: string;
    price: number;
    type: "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric"; 
    description: string;
    quantity: number;
    inStock: boolean;
    createdAt?: Date; 
    updatedAt?: Date; 
}




// interfaces/Order.ts
export interface IOrder {
    email: string;
    product: ObjectId; 
    quantity: number;
    totalPrice: number;
    createdAt?: Date; 
    updatedAt?: Date; 
}
