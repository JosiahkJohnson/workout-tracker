//requirements
const mongoose = require("mongoose");

//setup the mongoose schema
const Schema = mongoose.Schema;

//setup what a workout is and how it is stored to the mongoose database
const workoutSchema = new Schema({
    //the listed type of exersize, resistance or cardio
    //required
    type: {
        type: String,
        required: "Either a resistance or cardio workout."
    },
    //the name of the new exersize
    //required
    name: {
        type: String,
        required: "Please enter a valid name for the new workout."
    },
    //the length, or duration of the new exersize
    //required
    duration: {
        type: Number,
        required: "Enter the duration of the exersize"
    },
    //ammount of weight needed for the new exersize
    //not required
    weight: {
        type: Number
    },
    //how many sets in the exersize
    //not required
    sets: {
        type: Number
    },
    //how many reps in the exersize
    //not required
    reps: {
        type: Number
    }
});

//setup the workout model into a variable that can be exported
const Workout = mongoose.model("Workout", workoutSchema);

//export our new schema
module.exports = Workout;