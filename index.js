const { User } = require('./models/postgres');
const { Card } = require('./models/postgres');


User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });
