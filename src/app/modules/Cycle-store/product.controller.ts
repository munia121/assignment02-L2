import { NextFunction, Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productData = req.body
        const result = await productServices.createProductIntoBD(productData)

        res.json({
            message: 'Bicycle created successfully',
            success: true,
            data: result || {},
        })
    } catch (error) {
        next(error)
    }
}


const getAllProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { searchTerm } = req.query;
        const result = await productServices.getAllProductFromDB(searchTerm)

        res.json({
            message: 'Bicycles retrieved successfully',
            status: true,
            data: result,
        })
    } catch (error) {
        next(error)
    }
}

const getSingleData = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { productId } = req.params
        const result = await productServices.getSingleDataFromDB(productId)
        res.json({
            message: 'Bicycle retrieved successfully',
            status: true,
            data: result,
        })
    } catch (error) {
        next()
    }
}


const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params
        const updateDoc = req.body


        const result = await productServices.updateProductFromDB(productId, updateDoc)
        res.json({
            message: 'Bicycle updated successfully',
            status: true,
            data: result,
        })
    } catch (error) {
        next(error)
    }
}



const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params

        const result = await productServices.deleteProductFromDB(productId)
        res.json({
            message: 'Bicycle deleted successfully',
            status: true,
            data: result || {},
        })
    } catch (error) {
        next(error)
    }
}


export const productControllers = {
    createProduct,
    getAllProduct,
    getSingleData,
    updateProduct,
    deleteProduct
}