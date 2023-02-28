import database from '../../database'

const listProductAndCategorieService = async (id) => {
    try {
        const res = await database.query(
            "SELECT pdt.name name, pdt.price price, ctg.name category FROM products pdt JOIN categories ctg ON pdt.category_id = ctg.id WHERE pdt.category_id = $1;",
            [id]
            )
            
        return res.rows
    } catch (err) {
        throw new Error(err)
    }
}

export default listProductAndCategorieService;