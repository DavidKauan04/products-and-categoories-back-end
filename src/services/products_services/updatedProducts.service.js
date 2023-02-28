import database from '../../database'

const updatedProductsServices = async (id, name) => {
    try {
        const res = await database.query(
            "UPDATE products pdt SET name = $1 WHERE pdt.id = $2 RETURNING *;",
            [name, id]
            )

        if (res.rows.length === 0) {
            throw "products not found!"
        }
        
        return res.rows[0]
    } catch (err) {
        throw new Error(err)
    }
}

export default updatedProductsServices;