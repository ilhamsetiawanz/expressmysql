const express = require('express');
const Article = require('../model/artikel');

const router = express.Router();

// Route untuk menulis artikel
router.post('/tulis', async (req, res) => {
    const { title, content, author } = req.body;

    try {
        const article = await Article.create({ title, content, author });
        res.status(201).json({ message: 'Artikel berhasil dibuat', article });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan pada server', error: error.message });
    }
});

// Route untuk melihat semua artikel
router.get('/', async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.status(200).json({ articles });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan pada server', error: error.message });
    }
});

// Route untuk melihat artikel tertentu berdasarkan ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const article = await Article.findByPk(id);
        if (article) {
            res.status(200).json({ article });
        } else {
            res.status(404).json({ message: 'Artikel tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan pada server', error: error.message });
    }
});

module.exports = router;
