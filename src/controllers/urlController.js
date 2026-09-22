const url = require('../models/Url')
const getNextSequence = require('../utils/getNextSequence');
const generateCode = require('../utils/generateCode');


    module.exports.shorten = async(req,res) =>{
        //code longurl

        const {longUrl }= req.body

        try{
            if(!longUrl) return res.status(400).json({
                success:false,
                message: "url is missing"
            })

    const sequence = await getNextSequence('url_counter');
    const code = generateCode(sequence);

    const data = await url.create({code,longUrl})
    return res.status(201).json({
                success:true,
                message: "created",
                data
            })
    }
        catch(err){
            console.error(err)
    res.status(500).json({
                success:false,
                message: "error",
            })
        }
    }

    module.exports.redirect = async(req,res)=>{
        const { code } = req.params

        try{
            const doc = await url.findOne({ code })

            if(!doc) return res.status(404).json({
                success:false,
                message: "short code not found"
            })

            return res.redirect(doc.longUrl)
        }
        catch(err){
            console.error(err)
            res.status(500).json({
                success:false,
                message: "error"
            })
        }
    }