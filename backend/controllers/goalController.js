const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
//@des  get goals
//@routw   Get /api/goals

//@access Private

const getGoals = asyncHandler(async(req, res) =>{
    const goals = await Goal.find()

    res.status(200).json(goals)
});

//@des  get goals
//@routw   Get /api/goals

//@access Private

const setGoals = asyncHandler(async(req, res) =>{
    if(!req.body.text){
        res.status(400);
        throw new Error("Please add a text field");
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
});

//@des  get goals
//@routw   Get /api/goals

//@access Private
//@des  get goals
//@routw   Get /api/goals

//@access Private

const updateGoals = asyncHandler(async(req, res) =>{
    //find the id
    const goal = await Goal.findById(req.params.id)

    //check if goal exists 
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    //finding the goal and creating if it doesn't exist
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal);
});

const deleteGoals = asyncHandler(async(req, res) =>{
    //find the id
    const goal = await Goal.findByIdAndDelete(req.params.id)

    //check if goal exists
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    // await goal.findByIdandRemove(req.params.id)
    res.status(200).json({id: req.params.id});
});

module.exports = {
    getGoals,
    setGoals,
    deleteGoals,
    updateGoals
}