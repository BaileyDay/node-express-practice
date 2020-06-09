const getDb = require("../util/database").getDB;

class Product {
  constructor(title, price, description, imageURL) {
    this.title = title;
    this.proce = price;
    this.description = description;
    this.imageURL = imageURL;
  }
  save() {
    const db = getDb;
    db.collection("products")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      });
  }
}

module.exports = Product;
