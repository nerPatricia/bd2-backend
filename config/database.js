/* TODO adicionar configuração para corrigir erro:
*
* ERROR: Server requests authentication using unknown plugin sha256_password. 
* See TODO: add plugins doco here on how to configure or author authentication plugins.
*
*/
module.exports = {
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  host: '127.0.0.1',
  dialect: 'mysql'
}