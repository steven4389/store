'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Product = sequelize.define('Product', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
      },
    valor:DataTypes.DOUBLE,
    peso:DataTypes.FLOAT,
    stock:DataTypes.INTEGER,
    category:DataTypes.STRING,
    descripcion:DataTypes.TEXT
  }, {
    tableName: "products"
  });

  Product.associate = function(models) {
    // Usuario tiene un domicilio o una direccion
   
  };

  return Product;
};