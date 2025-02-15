import { Task } from '../model/Task';
import knex from '../database/knexfile';
const db = require('knex')(knex.development);

class TaskService {
    async create(task: Task): Promise<Task> {
        const [newTask] = await db('tasks').insert(task).returning('*');
        return newTask;
    }

    async findAll(): Promise<Task[]> {
        return await db('tasks').select('*');
    }

    async findById(id: number): Promise<Task | undefined> {
        const task = await db('tasks').where({ id }).first();
        return task;
    }

    async update(id: number, updates: Partial<Task>): Promise<Task | undefined> {
        await db('tasks').where({ id }).update(updates);
        return this.findById(id);
    }

    async delete(id: number): Promise<void> {
        await db('tasks').where({ id }).del();
    }
}

export default new TaskService();