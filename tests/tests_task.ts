import knex from 'knex';
import config from '../knexfile';

const testDb = knex(config.development);

describe('Task Model', () => {
    it('should create a new task', async () => {
        const [taskId] = await testDb('tasks').insert({
            title: 'Test Task',
            description: 'This is a test task',
            status: 'pendente'
        });

        const task = await testDb('tasks').where({ id: taskId }).first();

        expect(task).toBeDefined();
        expect(task.title).toBe('Test Task');
        expect(task.status).toBe('pendente');
    });

    it('should list all tasks', async () => {
        await testDb('tasks').insert([
            { title: 'Task 1', status: 'pendente' },
            { title: 'Task 2', status: 'em andamento' }
        ]);

        const tasks = await testDb('tasks').select('*');

        expect(tasks.length).toBe(2);
        expect(tasks[0].title).toBe('Task 1');
        expect(tasks[1].status).toBe('em andamento');
    });
});