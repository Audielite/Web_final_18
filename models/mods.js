var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
//define a schema - what fields will the task have
var modsSchema = new mongoose.Schema ({

  modlist: String,
  completed: Boolean,

  _creator : { type : ObjectId, ref : 'User' }

});
var Mods = mongoose.model('Mods', modsSchema);

module.exports = Mods;
