const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  prenom: {
    type: String,
  },
  debut: {
    type: String,
  },
  fin: {
    type: String,
  },
  price: {
    type: Number,
  },
});
module.exports = mongoose.model("user", UserSchema);
