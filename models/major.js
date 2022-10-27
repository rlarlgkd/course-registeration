const Sequelize = require('sequelize');

module.exports = class Major extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Major',
            tableName: 'majors',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
          });
    }
}