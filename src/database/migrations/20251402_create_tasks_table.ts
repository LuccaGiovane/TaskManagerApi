import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('tasks', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('description').nullable();
        table.enum('status', ['pendente', 'em andamento', 'concluído']).defaultTo('pendente');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('tasks');
}