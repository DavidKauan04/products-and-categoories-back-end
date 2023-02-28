import database from '../../database'

const updatedCategoriesServices = async (id, name) => {
    try {

        const res = await database.query(
            "UPDATE categories ctg SET name = $1 WHERE ctg.id = $2 RETURNING *;",
            [name, id]
        )

        if (res.rows.length === 0) {
            throw "categorie not found!"
        }

        return res.rows[0]
    } catch (err) {
        throw new Error(err)
    }
}

export default updatedCategoriesServices;