module.exports = 
    function ensureAuthenticated(req, res, next){
        if(req.isAuthenticated()){
            return next()
        } else {
            return res.send(404)
        }
    }
