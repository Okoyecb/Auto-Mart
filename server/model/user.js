import pool from '../database/connections';


class User {
  static createUsers(details) {
    return new Promise((resolve, reject) => {
      pool.query(`INSERT INTO users ( first_name, last_name, email, password, address, token) VALUES ('${details.first_name}', '${details.last_name}','${details.email}', '${details.password}', '${details.address}', '${details.token}') returning *`)
        .then(results => resolve(results))
        .catch(error => reject(error));
    });
  }

  static getUser(email) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM users WHERE email = '${email}'`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static storeUserToken(id, token) {
    return new Promise((resolve, reject) => {
      pool.query(`UPDATE users SET token =  '${token}' WHERE id = ${id} returning *`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static getUserByToken(token) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM users WHERE token =  '${token}'`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }
}


export default User;
