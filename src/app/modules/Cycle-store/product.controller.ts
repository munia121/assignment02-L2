import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body
        const result = await productServices.createProductIntoBD(productData)

        res.json({
            message: 'Bicycle created successfully',
            success: true,
            data: result || {},
        })
    } catch (error) {
        res.json({
            message: 'Something went wrong {VALUE}',
            status: false,
            error: error,
        })
    }
}


const getAllProduct = async (req: Request, res: Response) => {
    try {
        const result = await productServices.getAllProductFromDB()

        res.json({
            message: 'Bicycle get successfully',
            success: true,
            data: result,
        })
    } catch (error) {
        res.json({
            message: 'Something went wrong {VALUE}',
            status: false,
            error: error,
        })
    }
}

const getSingleData = async (req: Request, res: Response) => {

    try {
        const { productId } = req.params
        const result = await productServices.getSingleDataFromDB(productId)
        res.json({
            message: 'A single Bicycle get successfully',
            success: true,
            data: result,
        })
    } catch (error) {
        res.json({
            message: 'Something went wrong {VALUE}',
            status: false,
            error: error,
        })
    }
}


const updateProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params
        const updateDoc =  req.body

        
        const result = await productServices.updateProductFromDB(productId, updateDoc)
        res.json({
            message: 'A single Bicycle get successfully',
            success: true,
            data: result ,
        })
    } catch (error) {
        res.json({
            message: 'Something went wrong {VALUE}',
            status: false,
            error: error,
        })
    }
}



export const productControllers = {
    createProduct,
    getAllProduct,
    getSingleData,
    updateProduct
}