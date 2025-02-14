import { Knex } from 'knex';
require('dotenv').config();

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: process.env.DATABASE_URL || './database.sqlite',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './migrations',
        },
    },
};

export default config;