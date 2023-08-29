/**
 * Array to store tasks.
 * @type {Array<Object>}
 */
const tasks = []

/**
 * ID for the next task. Increments each time a new task is added.
 * @type {number}
 */
let currentId = 1

/**
 * Model class representing a task.
 * @class
 */

/**
 * export class TaskModel {
 *
 *
  /**
   * Fetches all tasks.
   * @name TaskModel.getAllTasks
   * @static
   * @returns {Array<Object>} Array of tasks.
   */

/**
 * Adds a new task to the list.
 * @name TaskModel.addTask
 * @static
 * @param {string} description - The description of the task.
 * @returns {Object} The new task object.
 */

/**
 * Deletes a task from the list by its ID.
 * @name TaskModel.deleteTask
 * @static
 * @param {number} id - The ID of the task to delete.
 */
export class TaskModel {
  static async getAllTasks() {
    return tasks
  }

  static async addTask({ description }) {
    const newTask = {
      id: currentId++,
      description,
    }

    tasks.push(newTask)

    return newTask
  }

  static async deleteTask({ id }) {
    const indexTaskFound = tasks.findIndex((task) => task.id === id)

    const isTaskNotFound = indexTaskFound === -1
    if (isTaskNotFound) {
      throw new TaskNotFoundError(`Task with id:${id} not found`)
    }

    tasks.splice(indexTaskFound, 1)
  }
}

export class TaskNotFoundError extends Error {
  constructor(message) {
    super(message)
    this.name = 'TaskNotFoundError'
  }
}
