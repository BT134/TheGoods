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

Category.hasMany(Article, {
    foreignKey: 'category_id'
    },
);

Article.belongsTo(Category, {
    foreignKey: 'category_id'
    },
);

User.hasMany(Article, {
    foreignKey: 'user_id'
}
);

Article.belongsTo(User, {
    foreignKey: 'user_id'
});





module.exports = { Category, Article, User };