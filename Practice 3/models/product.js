const getDb = require("../util/database").getDB;

class Product {
  constructor(title, price, description, imageURL) {
    this.title = title;
    this.proce = price;
    this.description = description;
    this.imageURL = imageURL;
  }
  save() {}
}

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
