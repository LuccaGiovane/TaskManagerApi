<div align="center">
 <h1><b>TaskManager</b></h1><br><br>

 <a href="" target="_blank">![NodeJs](https://img.shields.io/badge/Node-JS-blue)</a>
 ![SQLite](https://img.shields.io/badge/SQLite-magenta)
 ![ExpressJs](https://img.shields.io/badge/Express-Js-green)
 ![Bison](https://img.shields.io/badge/Knex-Js-yellow)
</div>


<div>
  <h2><b>Descrição</b></h2>
  
  <a>API REST para gerenciar tarefas.</a>
</div>

<div>
  <h2><b>Endpoints</b></h2>

  - `POST /api/tasks` → Criar uma nova tarefa.
  - `GET /api/tasks` → Listar todas as tarefas.
  - `GET /api/tasks/:id` → Buscar uma tarefa específica.
  - `PUT /api/tasks/:id` → Atualizar uma tarefa.
  - `DELETE /api/tasks/:id` → Remover uma tarefa.
    
</div>

<div>
  <h2><b>Como executar</b></h2>
  
  1. Clone o repositório.
  2. Execute `npm install`.
  3. Configure o `.env` com base no `.env.example`.
  4. Execute as migrações: `npx knex migrate:latest --knexfile src/database/knexfile.ts`.
  5. Inicie o servidor: `npm start`.
</div>


## Testes
Execute `npm test` para rodar os testes.
