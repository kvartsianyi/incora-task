const {dbTablesNamesEnum: {FEEDS}, modelNameEnum: {FEED}} = require('../../constants');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(FEED, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            feedName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            feedLink: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: FEEDS,
            timestamps: false
        });
};
