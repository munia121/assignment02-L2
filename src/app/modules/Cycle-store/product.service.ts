import { ModelsSchema } from "../product.model";
import { IProduct } from "./product.interface";

const createProductIntoBD = async (product: IProduct) => {
  const result = await ModelsSchema.productModel.create(product);
  return result;
};

const getAllProductFromDB = async (searchTerm: any) => {
  const filter = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm || "", $options: "i" } },
          { brand: { $regex: searchTerm || "", $options: "i" } },
          { type: { $regex: searchTerm || "", $options: "i" } },
        ],
      }
    : {};

  const result = await ModelsSchema.productModel.find(filter);

  return result;
};

const getSingleDataFromDB = async (id: string) => {
  const result = await ModelsSchema.productModel.findOne({ _id: id });
  return result;
};

const updateProductFromDB = async (id: string, updateDoc: IProduct) => {
  const result = ModelsSchema.productModel.findByIdAndUpdate(
    { _id: id },
    { ...updateDoc, inStock: updateDoc.quantity > 0 },
    { new: true },
  );
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ModelsSchema.productModel.findByIdAndDelete({ _id: id });
  return result;
};

export const productServices = {
  createProductIntoBD,
  getAllProductFromDB,
  getSingleDataFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
