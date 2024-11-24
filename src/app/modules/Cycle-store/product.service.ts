import { ModelsSchema } from "../product.model"
import { IProduct } from "./product.interface"

const createProductIntoBD = async (product: IProduct) => {
    const result = await ModelsSchema.productModel.create(product)
    return result;
}

const getAllProductFromDB = async () => {
    const result = await ModelsSchema.productModel.find()
    return result
}

const getSingleDataFromDB = async (id: string) => {
    const result = await ModelsSchema.productModel.findOne({ _id: id })
    console.log('controllers result', result)
    return result
}


const updateProductFromDB = async (id: string, updateDoc:IProduct) =>{
    const  result = ModelsSchema.productModel.findByIdAndUpdate(
        {_id: id},
        {...updateDoc, inStock: updateDoc.quantity > 0},
        {new: true}
    )
    return result;
}


export const productServices = {
    createProductIntoBD,
    getAllProductFromDB,
    getSingleDataFromDB,
    updateProductFromDB
    
}