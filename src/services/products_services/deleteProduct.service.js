import database from '../../database'

const deleteProductsServices = async (id) => {
    try {
        const res = await database.query(
            "DELETE FROM products WHERE id = $1 RETURNING *;",
            [id]
        )

        if (res.rows.length === 0) {
            throw "products not found!"
        }

        return 'products delete'
    } catch (err) {
        throw new Error(err)
    }
}

export default deleteProductsServices;