import seed from './createSeeds';
import pool from '../connections';

const run = async () => {
  console.log('here');
  try {
    await pool.query(seed.userTable);
    await pool.query(seed.carTable);
    await pool.query(seed.orderTable);
  } catch (error) {
    console.log(error);
  }
};

export default run();
