const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.Promise = Promise;

const userSchema = new Schema({
  githubName: {
    type: String,
    unique: true,
    lowercase: true,
  },
  avatarUrl: String,
  settings: Object,
});

const modelClass = mongoose.model('user', userSchema);

module.exports = modelClass;