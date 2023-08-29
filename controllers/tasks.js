// importar modelo
import { TaskModel, TaskNotFoundError } from '../models/task.js'

export const getAllTasks = async (req, res) => {
  const tasks = await TaskModel.getAllTasks()
  res.json(tasks)
}

export const addTask = async (req, res) => {
  const { description } = req.body
  const task = await TaskModel.addTask({ description })

  res.json(task)
}

export const deleteTask = async (req, res) => {
  const { id } = req.params

  try {
    await TaskModel.deleteTask({ id: Number(id) })
  } catch (err) {
    if (err instanceof TaskNotFoundError) {
      return res.status(404).json({ message: err.message })
    }
    return res.status(500).json({ message: err.message })
  }

  res.json({ message: 'Deleted successfully' })
}
