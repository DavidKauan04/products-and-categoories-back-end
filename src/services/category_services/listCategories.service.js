import database from '../../database'

const listCategoriesServices = async () => {
    try {
        const res = await database.query("SELECT * FROM categories;")
        return res.rows
    } catch (err) {
        throw new Error(err)
    }
}


const listIdCategoriesServices = async (id) => {
    try {
        const res = await database.query("SELECT ctg.name FROM categories ctg WHERE ctg.id = $1;", [id])
        return res.rows[0]
    } catch (err) {
        throw new Error(err)
    }
}

export {
    listCategoriesServices,
    listIdCategoriesServices
}