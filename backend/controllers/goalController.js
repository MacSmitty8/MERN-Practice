const asyncHandler = require('express-async-handler')
//@des  get goals
//@routw   Get /api/goals

//@access Private

const getGoals = asyncHandler(async(req, res) =>{
    res.status(200).json({message: "Get Goals"});
});

//@des  get goals
//@routw   Get /api/goals

//@access Private

const setGoals = asyncHandler(async(req, res) =>{
    if(req.body.text){
        res.status(400);
        throw new Error("Please add a text field");
    }
});

//@des  get goals
//@routw   Get /api/goals

//@access Private
//@des  get goals
//@routw   Get /api/goals

//@access Private

const updateGoals = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Update goal ${req.params.id}`});
});

const deleteGoals = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Delete goal ${req.params.id}`});
});

module.exports = {
    getGoals,
    setGoals,
    deleteGoals,
    updateGoals
}