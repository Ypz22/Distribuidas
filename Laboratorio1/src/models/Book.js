const db = require('../config/db')

const Book = {
    findAll: async () => {
        const query = `SELECT b.*, a.first_name as author_first_name, a.last_name as author_last_name FROM book b JOIN author a ON b.author_id = a.id ORDER by b.id`
        const [rows] = await db.query(query)
        return rows
    },
}