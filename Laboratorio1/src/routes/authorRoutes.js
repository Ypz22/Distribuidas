const express = require('express');
const router = express.Router();
// const authorController = require('../controllers/authController');
// router.get('/authors', authorController.getAllAuthors);

const { getAllAuthors, createAuthor, updateAuthor, deleteAuthor } = require('../controllers/authController')

router.get('/', getAllAuthors);
router.post('/', createAuthor);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

module.exports = router;
