const { Place } = require("../models/places.model");

module.exports = {
    addPlace(req,res) {
        Place.create(req.body)
            .then(newPlace=>res.json(newPlace))
            .catch(err=>{res.status(400).json(err); console.log("making a post rqst")})
    },
    getAll(_,res){
        Place.find()
            .then(list=>res.json(list))
            .catch(err=>res.status(400).json(err))
    },
    delete(req,res){
        Place.deleteOne({_id:req.params.id})
            .then(confirmation => res.json(confirmation))
            .catch(err=>res.status(400).json(err))
    }

}
