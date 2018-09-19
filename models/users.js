var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
var userSchema = new Schema({
  fid: {
    type: Number,
    unique: true,
    required: false
  },
  username: {
    type: String,
    required: true,
    default: "User12"
  },
  mobile_number: {
      type: Number,
      required: true,
      default: 1234567890 
  },
  email: {
    type: String,
    required: true,
    default: "demo@gmail.com"
  },
  address: {
    type: String,
    required: true,
    default: "Dubai"
  },
  password: {
    type: String,
    required: true,
    default: "123@abc"
  },
  security_question: {
    type: String,
    required: true,
    default: "what is your pet name"
  },
  security_answer: {
    type: String,
    required: true,
    default: "potato"
  },
}, { collection: 'users' });

userSchema.plugin(AutoIncrement, {inc_field: 'fid'});
module.exports = mongoose.model('User', userSchema);
