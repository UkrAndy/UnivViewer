const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const universitySchema = new Schema({
        title: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 20
        },
        establishedDate: {
            type: Date,
            default:new Date(),
            validate: {
                validator: function (value) {
                    return value <= (new Date());
                }
            }
        },
        rating:{
            type:Number,
            min:0,
            max:100
        },
        description: {
            type: String,
            maxlength: 300
        },
    },
    {versionKey: false});
const University = mongoose.model("University", universitySchema);
module.exports = University;