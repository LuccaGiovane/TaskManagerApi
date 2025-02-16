import { Router, Request, Response, NextFunction } from 'express';
import TaskController from '../controller/TaskController';

const router = Router();

router.post('/tasks', (req: Request, res: Response, next: NextFunction) => {
    TaskController.create(req, res).catch(next);
});
router.get('/tasks', (req: Request, res: Response, next: NextFunction) => {
    TaskController.findAll(req, res).catch(next);
});
router.get('/tasks/:id', (req: Request, res: Response, next: NextFunction) => {
    TaskController.findById(req, res).catch(next);
});
router.put('/tasks/:id', (req: Request, res: Response, next: NextFunction) => {
    TaskController.update(req, res).catch(next);
});
router.delete('/tasks/:id', (req: Request, res: Response, next: NextFunction) => {
    TaskController.delete(req, res).catch(next);
});

export default router;
