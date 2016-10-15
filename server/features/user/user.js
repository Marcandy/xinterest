const mongoose = require('mongoose');

const User = new mongoose.Schema( {
  id:	{type: String},
  username:	{type: String},
  first_name: {type: String},
  last_name: {type: String},
  counts: {type: Schema.Types.Mixed}
})

module.exports = mongoose.model( "User", User );
