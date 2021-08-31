const Category = require('./Category');
const Article = require('./Article');
const User = require('./User');

User.hasMany(Article, {
    through: { 
        model: Category,
        unique: false
    },

    as: 'viewed_articles'
});

Article.belongsToMany(User, {
    through: {
    model: Category,
    unique: false,
}, 

    as: 'article_users'
});

module.exports = { Category, Article, User };