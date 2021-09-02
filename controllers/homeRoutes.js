const router = require('express').Router();
const { User, Article, Category } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const articleData = await article.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
      order: [['id', 'ASC']],
    });

    const articles = articleData.map((blog) => articles.get({ plain: true }));

    res.render('homepage', {
      articles,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/register', (req, res) => {
  // If a session exists, redirect the request to the login page
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('register');
});

router.get('/categories', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Category }],
    });

    const user = userData.get({ plain: true });

    res.render('categories', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/categories/:id', async (req, res) => {
  try {
    const categoryData = await user.findByPk(req.params.id, {
      include: [
        {
          model: Category,
        },
        {
          
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const category = categoryData.get({ plain: true });
    console.log(category)
    res.render('category', {
      ...category,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/categories/article/:id', async (req, res) => {
    try {
      const articleData = await user.findByPk(req.params.id, {
        include: [
          {
            model: Article,
          },
          {
            
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      const article = articleData.get({ plain: true });
      console.log(article)
      res.render('article', {
        ...article,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
