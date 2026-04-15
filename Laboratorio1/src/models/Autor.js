const db = require('../config/db')

const Autor = {
    findAll: async () => {
        const [rows] = await db.query('SELECT * FROM autor')
        return rows
    },

    createAutor: async (firstName, lastName, birthDate, nationality, email) => {
        const query = `
      INSERT INTO autor (first_name, last_name, birth_date, nationality, email) 
      VALUES (?, ?, ?, ?, ?)
    `

        const values = [firstName, lastName, birthDate, nationality, email]

        const [result] = await db.query(query, values)

        return {
            message: "Author created successfully",
            data: {
                id: result.insertId,
                firstName,
                lastName,
                birthDate,
                nationality,
                email
            }
        }
    },

    updateAutor: async (id, firstName, lastName, birthDate, nationality, email) => {
        const query = `
            UPDATE autor 
            SET first_name = ?, last_name = ?, birth_date = ?, nationality = ?, email = ?
            WHERE id = ?
        `

        const values = [firstName, lastName, birthDate, nationality, email, id]

        const [result] = await db.query(query, values)

        return {
            message: result.affectedRows > 0
                ? "Author updated successfully"
                : "Author not found",
            affectedRows: result.affectedRows
        }
    },

    deleteAutor: async (id) => {
        const [result] = await db.query(
            'DELETE FROM autor WHERE id = ?',
            [id]
        )

        return {
            message: result.affectedRows > 0
                ? "Author deleted successfully"
                : "Author not found",
            affectedRows: result.affectedRows
        }
    }
}

module.exports = Autor