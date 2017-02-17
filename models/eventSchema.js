const mongoose = require('mongoose');

const Events = new mongoose.Schema({
  username: String,
  eventTime: Date,
  location: String,
  createdAt: Date, // In the format of "2/16/2017, 8:28:03 PM"
  tags: Array,
  businessName: String,
  picLink: String, // Link to hosted picture
  busLink: String, // url to business' homepage
  description: String,
});

const ev = mongoose.model('Events', Events);

module.exports = ev;
