const Category = require('./Category');
const Article = require('./Article');
const User = require('./User');


User.hasMany(Category, {
    foreignKey: 'user_id'
    },
);

Category.belongsTo(User, {
    foreignKey: 'user_id'
    },
);

Category.belongsTo(Article, {
    foreignKey: 'category_id'
},
);

Article.hasMany(Category, {
    foreignKey: 'category_id'
});

User.hasMany(Article, {
    through: Category
});





module.exports = { Category, Article, User };