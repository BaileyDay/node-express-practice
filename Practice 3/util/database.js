const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const MongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Bailey:password123!@cluster0-jzzpv.mongodb.net/<dbname>?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected!");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = MongoConnect;
