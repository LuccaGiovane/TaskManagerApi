import knex from 'knex';
import config from './knexfile';

const db = knex(config.development);

async function main() {
    try {
        // Verificar se a tabela existe
        const tableExists = await db.schema.hasTable('tasks');
        if (!tableExists) {
            console.log('A tabela tasks não existe. Aplicando migrações...');
            await db.migrate.latest();
        }

        // Inserir uma nova tarefa
        const [taskId] = await db('tasks').insert({
            title: 'Test Task',
            description: 'This is a test task',
            status: 'pendente'
        });

        console.log(`Tarefa inserida com ID: ${taskId}`);

        // Consultar todas as tarefas
        const tasks = await db('tasks').select('*');
        console.log('Todas as tarefas:', tasks);
    } catch (error) {
        console.error('Erro ao acessar o banco de dados:', error);
    } finally {
        await db.destroy();
    }
}

main();