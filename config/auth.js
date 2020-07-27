module.exports = {
   ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()){
            return next()
        } 
        else {res.status(404).send("Please log in to continue")}
    }

}