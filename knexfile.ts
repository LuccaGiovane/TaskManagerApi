import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/database.sqlite' // Caminho para o banco de dados
        },
        migrations: {
            directory: './src/database/migrations', // Pasta das migrações
            extension: 'ts'
        },
        useNullAsDefault: true
    }
};

export default config;