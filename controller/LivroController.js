const express = require('express');
const router = express.Router();
const Livro = require('../model/Livro');

// GET todos os livros
router.get('/', async (req, res) => {
    try {
        const livros = await Livro.findAll();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros' });
    }
});

// GET livro por ID
router.get('/:id', async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (livro) {
            res.status(200).json(livro);
        } else {
            res.status(404).json({ error: 'Livro não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o livro' });
    }
});

// método POST
router.post('/', async (req, res) => {
    try {
        const  {nome, imagem, descricao, preco} = req.body;
        const novoLivro = await Livro.create(nome, imagem, descricao, preco);
        res.status(201).json(novoLivro);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar livro' });
    }
});

// método DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletado = await Livro.destroy({
            where: { id: req.params.id }
        });
        if (deletado) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Livro não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar livro' });
    }
});

module.exports = router;