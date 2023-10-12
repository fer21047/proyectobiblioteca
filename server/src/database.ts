import Mysql from 'promise-mysql';
import keys from './keys';

const pool = Mysql.createPool(keys.database);

pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('DB in Connected');
});

export default pool;

