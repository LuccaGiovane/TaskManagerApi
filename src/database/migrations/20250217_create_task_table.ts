import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('tasks', (table) => {
        table.increments('id').primary(); // ID, chave primária auto incrementada
        table.string('title').notNullable(); // Título obrigatório
        table.string('description'); // Descrição opcional
        table.enu('status', ['pendente', 'em andamento', 'concluído']).defaultTo('pendente'); // Status com valores permitidos e padrão
        table.timestamp('created_at').defaultTo(knex.fn.now()); // Data de criação gerada automaticamente
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('tasks');
}