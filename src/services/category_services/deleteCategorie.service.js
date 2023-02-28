import database from '../../database'

const deleteCategoriesServices = async (id) => {
    try {
        const res = await database.query(
            "DELETE FROM categories WHERE id = $1 RETURNING *;",
            [id]
        )

        if (res.rows.length === 0) {
            throw "categorie not found!"
        }

        return 'Categorie delete'
    } catch (err) {
        throw new Error(err)
    }
}

export default deleteCategoriesServices;