const mongoose = require ("mongoose");
const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}
const url = "mongodb+srv://abdulhakim:seattle1@cluster0.0gg40.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = ()=> {
  await mongoose.connect(url, connectionParams);
}

module.exports = connectDB;
