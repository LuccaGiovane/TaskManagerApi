import express from 'express';
import taskRoutes from './route/taskRoutes';

const app = express();

// Para ler JSON no body
app.use(express.json());

// Usa o router que criamos
app.use(taskRoutes);

// Sobe na porta 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
