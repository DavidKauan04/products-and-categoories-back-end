import database from '../../database'

const listProductsServices = async () => {
    try {
        const res = await database.query("SELECT * FROM products;")
        return res.rows
    } catch (err) {
        throw new Error(err)
    }
}


const listIdProductsServices = async (id) => {
    try {
        const res = await database.query("SELECT * FROM products WHERE id = $1;", [id])
        
        return res.rows[0]
    } catch (err) {
        throw new Error(err)
    }
}

export {
    listProductsServices,
    listIdProductsServices
}