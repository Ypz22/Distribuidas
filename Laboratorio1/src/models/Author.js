const db = require('../config/db')

const Author = {
    findAll: async () => {
        const [rows] = await db.query('SELECT * FROM athor')
        return rows
    },

    createAutor: async ({ firstName, lastName, birthDate, nationality, email }) => {
        const query = `
      INSERT INTO author (first_name, last_name, birth_date, nationality, email) 
      VALUES (?, ?, ?, ?, ?)
    `

        const values = [firstName, lastName, birthDate, nationality, email]

        const [result] = await db.query(query, values)

        return { id: result.insertId, firstName, lastName, birthDate, nationality, email }
    },

    updateAutor: async (id, { firstName, lastName, birthDate, nationality, email }) => {
        const query = `
            UPDATE author 
            SET first_name = ?, last_name = ?, birth_date = ?, nationality = ?, email = ?
            WHERE id = ?
        `

        const values = [firstName, lastName, birthDate, nationality, email, id]

        await db.query(query, values)

        return { id, firstName, lastName, birthDate, nationality, email }
    },

    deleteAutor: async (id) => {
        const [result] = await db.query(
            'DELETE FROM author WHERE id = ?',
            [id]
        )

        return { success: `Author with ID ${id} deleted successfully` }
    }
}

module.exports = Author