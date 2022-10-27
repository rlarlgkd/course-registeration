const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            admin: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            uname: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            grade: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true,
            },
            major: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
          });
    }

    static associate(db) {
        db.User.belongsToMany(db.Class, { through: "Apply"});
    }
}