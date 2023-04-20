import { Sequelize } from "sequelize";

// menghubungkan program dengan database yang telah dibuat
const db = new Sequelize('fullstack_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;