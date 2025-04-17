import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://Admin:wuhbus-wefbyr-togTe3@250415-codingapple.k1r411l.mongodb.net/?retryWrites=true&w=majority&appName=250415-CodingApple';
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export default connectDB