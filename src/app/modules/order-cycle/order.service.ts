import { IProduct } from "../Cycle-store/product.interface";
import { ModelsSchema } from "../product.model";
import { IOrder } from "./order.interface";



const createOrderService = async (productId: string, quantity: any, email: string, totalPrice: any) => {

    console.log('order service id', productId)
    const product: IProduct | null = await ModelsSchema.productModel.findById(productId);

    if (!product) {
        throw new Error('Product not found');
    }

    if (product.quantity < quantity) {
        throw new Error('Insufficient stock');
    }


    if (product && quantity) {
        const orderSave = await ModelsSchema.orderModel.create({ email, product: product._id, quantity, totalPrice })

        
        if (orderSave) {
            const updatedQuantity = product.quantity - quantity;
            await ModelsSchema.productModel.findByIdAndUpdate(
                { _id: product._id },
                {
                    quantity: updatedQuantity, 
                    inStock: updatedQuantity > 0,
                    updatedAt: Date.now(),
                },
                { new: true }
            );
        }
        

        return orderSave
    }

};

const calculateRevenueService = async () => {
    const revenue = await ModelsSchema.orderModel.aggregate([
        { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
    ]);

    console.log(revenue)
    return revenue.length ? revenue[0].totalRevenue : 0; 
};




export const orderServices = {
    createOrderService,
    calculateRevenueService
}