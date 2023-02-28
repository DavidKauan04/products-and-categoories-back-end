import { Router } from "express";
import { createCategoriesController, deleteCategoriesController, lisIdCategoriesController, listCategoriesController, updateCategoriesController } from "../controllers/geral.controllers.js";


const categoriesRouter = Router();

categoriesRouter.get('', listCategoriesController)
categoriesRouter.post('', createCategoriesController)
categoriesRouter.patch('/:id', updateCategoriesController)
categoriesRouter.delete('/:id', deleteCategoriesController)
categoriesRouter.get('/:id', lisIdCategoriesController)

export default categoriesRouter;