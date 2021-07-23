const express = require("express");
const router = express.Router();
const {createTask , listTask, fetchTask, deleteTask, updateTask } = require("../controller/tasksController")

router.param("taskId",async (req,res,next,taskId)=>{
    try {
        const task = await fetchTask(taskId,next)
        if (task){
        req.task=task;
        next();
        }else {
            next({status:404, message: "task not found"})
        }
    } catch (error) {
        next(error)
    }
})





router.post("/",createTask)
router.get("/",listTask)
router.put("/:taskId",updateTask)
router.delete("/:taskId",deleteTask)
module.exports=router;