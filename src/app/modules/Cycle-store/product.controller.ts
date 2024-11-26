import { NextFunction, Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productData = req.body;
    const result = await productServices.createProductIntoBD(productData);

    res.status(200).json({
      message: "Bicycle created successfully",
      success: true,
      data: result || {},
    });
  } catch (error) {
    next(error);
  }
};

const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { searchTerm } = req.query;
    const result = await productServices.getAllProductFromDB(searchTerm);

    res.status(200).json({
      message: "Bicycles retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleDataFromDB(productId);
    res.status(200).json({
      message: "Bicycle retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const updateDoc = req.body;

    const result = await productServices.updateProductFromDB(
      productId,
      updateDoc,
    );
    res.status(200).json({
      message: "Bicycle updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;

    const result = await productServices.deleteProductFromDB(productId);
    res.status(200).json({
      message: "Bicycle deleted successfully",
      status: true,
      data: result || {},
    });
  } catch (error) {
    next(error);
  }
};

export const productControllers = {
  createProduct,
  getAllProduct,
  getSingleData,
  updateProduct,
  deleteProduct,
};
