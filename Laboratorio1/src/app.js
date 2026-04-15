const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authorRoutes = require('./routes/authorRoutes');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api/authors', authorRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Book and Author API');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});