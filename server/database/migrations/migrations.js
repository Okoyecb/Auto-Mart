import table from './createTables';
import pool from '../connections';

const run = async () => {
  console.log('here');
  try {
    await pool.query(table.userTable);
    await pool.query(table.carTable);
    await pool.query(table.orderTable);
  } catch (error) {
    console.log(error);
  }
};

export default run();
