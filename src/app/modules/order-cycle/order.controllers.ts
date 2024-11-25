
import { NextFunction, Request, Response } from "express";
import { orderServices } from "./order.service"



const createdOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, product, quantity, totalPrice } = req.body;
        const orderData = await orderServices.createOrderService(product, quantity, email, totalPrice)

        res.json({
            message: 'Order created successfully',
            status: true,
            data: orderData || {},
        })


    } catch (error: any) {
        next(error)
    }
};




const calculateRevenue = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const totalRevenue = await orderServices.calculateRevenueService();

        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: { totalRevenue },
        });
    } catch (error: any) {
        next(error)
    }
};


export const orderControllers = {
    createdOrder,
    calculateRevenue
}