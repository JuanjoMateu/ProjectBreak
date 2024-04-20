const Task = require('../models/Task')

const TaskController = {
    async create(req, res) {
        try {
            const task = await Task.create({ ...req.body, completed: false })
            res.status(201).send(task)
        } catch (error) {
            console.log(error)
        }
    },
    async getAll(req, res) {
        try {
            const task = await Task.find()
            res.json(task)
        } catch (error) {
            console.log(error)
        }
    },
    async getAllSSR(req, res) {
        try {
            const task = await Task.find()
            res.send(`
                <h1>Todas las tareas</h1>
                ${task.map(task => {
                return (
                    `<div>
                        <h2>${task.title}</h2>
                        <p>${task.completed}</p>
                        </div>`
                )
            }).join('')}
            `)
        } catch (error) {
            console.log(error)
        }
    },
    async getByID(req, res) {
        try {
            const id = req.params._id
            const task = await Task.findById(id)
            res.json(task)
        } catch (error) {
            console.log(error)
        }
    },
    async deleteTask(req, res) {
        try {
            const id = req.params._id
            const deleteTask = await Task.findByIdAndDelete(id)
            if (!deleteTask) {
                return res.status(404).json({ mensaje: "Task not exist" })
            }
            res.json({ mensaje: "Task deleted", deleteTask })
        } catch (error) {
            console.log(error)
        }
    },
    async updateCompleted(req, res) {
        try {
            const id = req.params._id
            const updateTask = await Task.findByIdAndUpdate(
                id, {
                completed: true
            }, { new: true }
            )
            if (!updateTask) {
                return res.status(404).json({ mensaje: 'Task not founded' })
            }
            res.json(updateTask)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = TaskController