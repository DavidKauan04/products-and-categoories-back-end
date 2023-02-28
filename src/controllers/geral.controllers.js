import createdCategoriesServices from "../services/category_services/createdCategorie.service";
import deleteCategoriesServices from "../services/category_services/deleteCategorie.service";
import updatedCategoriesServices from "../services/category_services/updatedCategorie.service"
import {
    listCategoriesServices,
    listIdCategoriesServices
} from '../services/category_services/listCategories.service'
import { listIdProductsServices, listProductsServices } from "../services/products_services/listProducts.service";
import createdProductServices from "../services/products_services/createdProduct.service";
import updatedProductsServices from "../services/products_services/updatedProducts.service";
import deleteProductsServices from "../services/products_services/deleteProduct.service";
import listProductAndCategorieService from "../services/products_services/getProductsAndCategorie.service";


export const listCategoriesController = async (req, res) => {
    try {
        const categories = await listCategoriesServices()
        return res.status(200).json(categories)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};

export const createCategoriesController = async (req, res) => {
    try {
        const {
            name
        } = req.body
        const newCategorie = await createdCategoriesServices(name)
        return res.status(201).json({message: 'create categories', category: newCategorie})
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};

export const updateCategoriesController = async (req, res) => {
    try {
        const id = req.params.id
        const {
            name
        } = req.body

        const updateCategorie = await updatedCategoriesServices(id, name)
        return res.status(200).json({message: 'Atualizada', category: updateCategorie})
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};

export const deleteCategoriesController = async (req, res) => {
    try {
        const id = req.params.id
        const deletCategorie = await deleteCategoriesServices(id)
        return res.status(204).send()
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};

export const lisIdCategoriesController = async (req, res) => {
    try {
        const id = req.params.id
        const listIdCategorie = await listIdCategoriesServices(id)
        return res.status(200).json(listIdCategorie)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};

//--------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------

export const listProductsController = async (req, res) => {
    try {
        const products = await listProductsServices()
        return res.status(200).json(products)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};

export const createProductsController = async (req, res) => {
    try {
        const {
            name,
            price,
            category_id
        } = req.body
        const newProduct = await createdProductServices(name, price, category_id)
        return res.status(201).json({message: 'create producst', product: newProduct})
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};

export const updateProductsController = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            name,
        } = req.body;
        const updatedProduct = await updatedProductsServices(id, name)
        return res.status(200).json({message: "Atualizado", product: updatedProduct})
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};

export const deleteProductsController = async (req, res) => {
    try {
        const id = req.params.id
        const deletCategorie = await deleteProductsServices(id)
        return res.status(204).send()
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

export const lisIdProductsController = async (req, res) => {
    try {
        const id = req.params.id
        const listIdProduct = await listIdProductsServices(id)
        return res.status(200).json(listIdProduct)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};

export const listProductsAndCategoriesController = async (req, res) => {
    try {
        const id = req.params.categoryId
        const listProductAndCategory = await listProductAndCategorieService(id)
        return res.status(200).json(listProductAndCategory)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};