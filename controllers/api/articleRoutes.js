const router = require('express').Router();
const { Category, Article, User } = require('../../models');

// GET all articles
router.get('/', async (req, res) => {
  try {
    const articleData = await Article.findAll();
    res.status(200).json(articleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single article
router.get('/:id', async (req, res) => {
  try {
    const articleData = await Article.findByPk(req.params.id, {
      // JOIN with article, using the category through table
      include: [{ model: Article, through: Category, as: 'category_id' }]
    });

    if (!articleData) {
      res.status(404).json({ message: 'No article found with this id!' });
      return;
    }

    res.status(200).json(articleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a article
router.post('/', async (req, res) => {
  try {
    const articleData = await Article.create(req.body);
    res.status(200).json(articleData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE an article
router.delete('/:id', async (req, res) => {
  try {
    const articleData = await Article.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!articleData) {
      res.status(404).json({ message: 'No article found with this id!' });
      return;
    }

    res.status(200).json(articleData);
  } catch (err) {
    res.status(500).json(err);
  }
});












module.exports = router;