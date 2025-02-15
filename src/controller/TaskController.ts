import { Request, Response } from 'express';
import TaskService from '../service/TaskService';
import { validateTask } from '../middleware/validateTask';

class TaskController {
    async create(req: Request, res: Response) {
        try {
            validateTask(req.body);
            const task = await TaskService.create(req.body);
            res.status(201).json(task);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAll(req: Request, res: Response) {
        const tasks = await TaskService.findAll();
        res.json(tasks);
    }

    async findById(req: Request, res: Response) {
        const task = await TaskService.findById(Number(req.params.id));
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    }

    async update(req: Request, res: Response) {
        try {
            validateTask(req.body, false); // Não valida campos obrigatórios na atualização
            const task = await TaskService.update(Number(req.params.id), req.body);
            if (!task) return res.status(404).json({ error: 'Task not found' });
            res.json(task);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        await TaskService.delete(Number(req.params.id));
        res.status(204).send();
    }
}

export default new TaskController();