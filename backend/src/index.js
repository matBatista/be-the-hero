const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // 

const app = express();


// deixa qualquer front end acessar o backend
app.use(cors());


// fala para o express pegar as requisições transformar o json para algo entendivel.
app.use(express.json());
app.use(routes);

/**
 * instalar nodemon 
 * npm install nodemon -D
 * usar para monitorar o codigo e nao ficar sempre parando e inciando o index.
 * NO PACKAGE.JSON em scripts tirar o "TESTE" e colocar  ("start" : "nodemon index.js")
 * assim você pode usar 
 * npm start
 * 
 * e o nodemon ja estara lendo tudo que você passar de alteração.
 * 
 *
 * ps. -D é pq só vai ser usado isso no ambiente de desenvolvimento.
 */

/**
 *  node index.js para iniciar.
 */


/**
 * Rota = Recurso que queremos usar;
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar info do back-end
  * POST: Criar info no back-end
  * PUT: Alterar info do back-end
  * DELETE: Deletar info do back-end
*/

/**
 * Tipos de Parámetros:
 * 
 * Query Params: Parametros nomeados na rota  após  "?" serve para (filtros, paginação)
 * ex.: users?name=Diego.
 * E se precisar usar mais de um pode fazer assim users?name=diego&idade=12 com o "&" para juntar.
 * 
 * Route Params: Parametros para identificar recursos.
 * ex.: /users/:1 
 * 
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos;
 * 
 */

 /**
  * SQL: MySQL, SQLite, Oracle, Microsoft SQL
  * NoSQL: MongoDB, CouchDB
  */

/**
 * Driver: SELECT * FROM usuers;
 * Query Builder: table('users').select('*').where('');
 * 
 */

 


app.listen(3333);