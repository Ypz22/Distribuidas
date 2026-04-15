const author = require('../models/Author')

const getAllAuthors = async (req, res) => {
    try {
        const authors = await author.findAll()
        res.json(authors)
    } catch (error) {
        console.error('Error fetching authors:', error)
        res.status(500).json({ error: 'Failed to fetch authors' })
    }
}

const createAuthor = async (req, res) => {
    try {
        const newAuthor = await author.createAutor(req.body);
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create author' })
    }
}

const updateAuthor = async (req, res) => {
    try {
        const updatedAuthor = await author.updateAutor(req.params.id, req.body);
        res.json(updatedAuthor);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update author' })
    }
}

const deleteAuthor = async (req, res) => {
    try {
        const deleteAuthor = await author.deleteAutor(req.params.id);
        res.json(deleteAuthor);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete author' })
    }
}

module.exports = {
    getAllAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
}