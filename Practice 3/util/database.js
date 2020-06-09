const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Bailey:password123!@cluster0-jzzpv.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected!");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDB = () => {
  if (_db) {
    return _db;
  }
  throw "no database found";
};

exports.MongoConnect = MongoConnect;
exports.getDB = getDB;
