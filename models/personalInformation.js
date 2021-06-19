const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PersonalInfoSchema = new Schema ({
  input1: {
    type: String
  },
  input2: {
    type: String
  }
});

const PersonalInfoModel = mongoose.model("myFirstDatabase", PersonalInfoSchema);
module.exports = PersonalInfoModel;
