const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: 'avram',
  host: 'localhost',
  port: 5432,
  database: 'gaming-pub'
});

module.exports = pool;