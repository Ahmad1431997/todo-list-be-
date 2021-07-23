const {Task} = require("../db/models")


exports.fetchTask=async(taskId, next)=>{
    try {
        const foundTask = await Task.findByPk(taskId)
        return foundTask;
    } catch (error) {
        next(error)
    }
}


exports.createTask =async (req,res,next)=>{
    try {
        const newTask = await Task.create(req.body)
        res.status(201).json(newTask)
    } catch (error) {
        next(error)
    }
    }

    exports.listTask = async (req,res,next)=>{
        try {
            const tasksList = await Task.findAll({
                attributes : {exclude : ["createdAt","updatedAt"]}
            })
            res.json(tasksList);
        } catch (error) {
            next(error)
        }
    }

    exports.updateTask = async (req,res,next)=>{
        try {
            await req.task.update(req.body)
            res.status(204).end()
        } catch (error) {
            next(error)
        }
    }

    exports.deleteTask = async (req,res,next)=>{
        try {
            await req.task.destroy();
           res.status(204).end();
        } catch (error) {
            next(error)
        }
    }