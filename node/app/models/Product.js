'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor: DataTypes.DOUBLE,
        peso: DataTypes.FLOAT,
        stock: DataTypes.INTEGER,
        category: DataTypes.STRING,
        descripcion: DataTypes.TEXT
    }, {});
    Product.associate = function (models) {
        // associations can be defined here
    };
    return Product;
};