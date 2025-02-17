import knex from 'knex';
import config from '../knexfile';

const testDb = knex(config.development);

beforeAll(async () => {
    // Executa as migrações antes dos testes
    await testDb.migrate.latest();
});

beforeEach(async () => {
    // Limpa todas as tabelas antes de cada teste
    await testDb('tasks').truncate();
});

afterAll(async () => {
    // Encerra a conexão com o banco de dados após os testes
    await testDb.destroy();
});