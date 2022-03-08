const isFreeAppUser=function(req,res,next){
    let data=req.headers["isFreeAppUser"]
    if(data!==undefined){
        res.send("request is missing")
    }
    next()
}
module.exports.isFreeAppUser=isFreeAppUser