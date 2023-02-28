import { Router } from "express";
import { createProductsController, deleteProductsController, lisIdProductsController, listProductsAndCategoriesController, listProductsController, updateProductsController } from "../controllers/geral.controllers.js";


const productsRouter = Router();

productsRouter.get('', listProductsController)
productsRouter.post('', createProductsController)
productsRouter.patch('/:id', updateProductsController)
productsRouter.delete('/:id', deleteProductsController)
productsRouter.get('/:id', lisIdProductsController)
productsRouter.get('/category/:categoryId', listProductsAndCategoriesController)

export default productsRouter;