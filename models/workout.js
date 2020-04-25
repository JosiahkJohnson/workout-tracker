//requirements
const mongoose = require("mongoose");

//setup the mongoose schema
const Schema = mongoose.Schema;

//setup what a workout is and how it is stored to the mongoose database
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: []
});

//setup the workout model into a variable that can be exported
const Workout = mongoose.model("heroku_7m2x998l", workoutSchema);

//export our new schema
module.exports = Workout;