module.exports = {
    isLoggedIn: function(req,res,next) {
   if(req.body.recipe.userId) {
   return next()
   } else if(!req.body.recipe.userId){
    res.status(404).send({message: "Please log in to continue"})
   } else {
    res.status(404).send({message: "Something went wrong"})
   }
}}