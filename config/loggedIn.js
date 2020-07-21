module.exports = 
    function checkNotAuthenticated(req, res, next){
        if(req.isAuthenticated()){
            return res.send(404)
        } 
        return next()
    }
