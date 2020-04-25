//our requirements
const router = require("express").Router();
const Workout = require("../models/workout");
const mongojs = require("mongojs");

//setup mongojs
const db = mongojs("workout", ["workouts"]);

//post routes
//for the create workout function
router.post("/api/workouts", (req, res) => {
    console.log(req);
    //use the create command
    Workout.create(req.body, (error, data) =>{
        if(error){
            res.send(error);
        } else {
            res.send(data);
        }
    });
});

//put routes
//route for the add exercise function
router.put("/api/workouts/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    //determine the type of exercise
    const type = req.body.type;
    //if cardio update as a cardio, if not, update as resistance
    db.workouts.update(
        { _id: mongojs(req.params.id) },
    { $push: { exercises: req.body } }); 
});

//get routes
//get to the exercise, and add new exercise page
router.get("/exercise", (req, res) => {
    res.sendFile("public/exercise.html" , { root : "./"});
});

//get to the stats page
router.get("/stats", (req, res) => {
    res.sendFile("public/stats.html", { root : "./" });
});

//this section is for getting something from the database
//get all workouts
router.get("/api/workouts/range", (req, res) => {
    //get the data
    Workout.find({}).then(data => {
        //return the data
        res.json(data);
    //detect if there was an error
    }).catch(error => {
        //send in the error
        res.status(400).json(error);
    });
});
//get latest workout, although it does return all of them,
//the front end will sort out what it needs though
router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(data => {
        res.json(data);
    }).catch(error => {
        res.status(400).json(error);
    });
});

//exports
module.exports = router;