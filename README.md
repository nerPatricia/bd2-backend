# bd2-backend


#PARTIU PASSAR NESSA MATERIA @PATRICIA
<br>
<br>
Este projeto realiza a requisição dos dados da API do Scryfall e armazena apenas os campos que serão utilizados em um banco relacional PostgreSQL e em um não relacional MongoBD. As rotas criadas enviam dados para aplicação a partir dos banco locais.
<br>
<br>
npm i
<br>
npx sequelize db:drop
<br>
npx sequelize db:create
<br>
npx sequelize db:migrate
<br>
npx sequelize db:seed:all
<br>
npm start
<br>
e acessa localhost:3000/get-all-cards
