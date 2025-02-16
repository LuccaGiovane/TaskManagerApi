import express from 'express';
import taskRoutes from './route/taskRoutes';

const app = express();
app.use(express.json());
app.use('/api', taskRoutes);

export default app;