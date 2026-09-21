
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique:true
  },
  longUrl: {
    type:String,
    required: true,

}
},{ 
  timestamps: true // Adds createdAt and updatedAt automatically 
})

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;