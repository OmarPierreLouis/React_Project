const mongoose = require('mongoose'); //Mongoose connection
// Purpose of this file is to describe how our  collection(table) should look. 
const FliSchema = new mongoose.Schema({
    Name: { //Each Key will represent a catagory in our collection
        type: String,
        required: [true],
        maxlength: [20, " Your Entry is too long"]
    },
    Price: { //Each Key will represent a catagory in our collection
        type: Number,
        required: [true],
        maxlength: [20, " Your Entry is too long"]
    },
    Size: { //Each Key will represent a catagory in our collection
        type: String,
        required: [true],
        maxlength: [20, " Your Entry is too long"]
    },
    Color: { //Each Key will represent a catagory in our collection
        type: String,
        required: [true],
        maxlength: [20, " Your Entry is too long"]
    }
})
const Fli = mongoose.model("Fli", FliSchema)

module.exports = Fli;








// actionsAvalible: {
//     type: Number,
// required:[true,"Author is required"],
// minlength:[5,"Author must be 5 charaters"]
// },
// Description: {
//     type: String,
// min: [1,"Rating must be atleast 1"],
// max:[10,"Rating can not be more than 10"]
// }
// date:{
//     type:Date,
//     required: [true,"date is required"],
//     min:['1991-06-25',"Cant be before my birthday"],
// }
//FOR POSSIBLE CHECK BOX
// isOver21:{
//     type:Boolean
// }
// if you want an optional field you dont need the required part of the validation
// }
// , {
//     timestamps: true

