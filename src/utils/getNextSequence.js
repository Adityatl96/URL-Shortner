
const Counter = require('../models/Counter')



const getNextSequence= async(name)=> {
const counter = Counter.findOneAndUpdate(
    {_id: name},
    {$inc: {seq:1}},
    {upsert:true, new:true}
)
return counter.seq
}

module.exports = getNextSequence