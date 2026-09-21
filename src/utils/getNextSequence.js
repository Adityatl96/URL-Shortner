
const Counter = require('../models/Counter.js')



const getNextSequence= async(name)=> {
const counter = await Counter.findOneAndUpdate(
    {_id: name},
    {$inc: {seq:1}},
    {upsert:true, new:true}
)
return counter.seq
}

module.exports = getNextSequence