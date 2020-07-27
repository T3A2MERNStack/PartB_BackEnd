
module.exports = {
     isLoggedIn: function(req,res,next) {
    if(req.user) {
    return next()
    }
    else {res.status(404).send("Please log in to continue")}
    }}   
