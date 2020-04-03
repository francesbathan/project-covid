const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema(
    {
        name: {
            type:String
        },
        streetAddress: {
            type: String
        },
        city:{
            type:String
        },
        zipcode:{
            type:String
        },
        phoneNumber:{
            type:String   
        },
        coordinates:{
            type:Array
        },
        website :{
            type:String
        }
}, {timestamps:true});

module.exports.Place = mongoose.model("Place", PlaceSchema)