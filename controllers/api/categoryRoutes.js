const router = require('express').Router();
const { Article, Category } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      where: {
        user_id: req.session.id,
      },
      include: [{ model: Article }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'This user has not yet created any categories.'});
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single category
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      where: {
        id: req.params.id,
        user_id: req.session.id
      },
      include: [{ Article }],
    });

    if (!categoryData) {
      res.status(200).json({ message: 'Category does not exist.' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  // Post request to create a new category
  try {
    const categoryData = await Category.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  //Update category name by its id value
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id
        },
      });

    if (!categoryData) {
      res.status(200).json({ message: 'Category does not exist.'});
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  //delete a category by its id value
  console.log(req.params.id)
  console.log(req.session.user_id)
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'This category could not be deleted.'});
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


