const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,

    useUnifiedTopology: true

  }, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
  });
}

module.exports = connectDB