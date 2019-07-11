import moment from 'moment';
import pool from '../database/connections';

class orders {
  static createOrder(details) {
    const orderDetails = {
      buyer: details.buyer,
      car_id: details.car_id,
      created_on: moment().format(),
      status: details.status,
      price_offered: details.price_offered,
    };
    return new Promise((resolve, reject) => {
      pool.query(`INSERT INTO orders ( buyer, car_id, created_on, status, price_offered) VALUES ('${orderDetails.buyer}', '${orderDetails.car_id}','${orderDetails.created_on}', '${orderDetails.status}', '${orderDetails.price_offered}') returning *`)
        .then(results => resolve(results))
        .catch(error => reject(error));
    });
  }

  static getOrder(id) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM orders WHERE id = ${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static updateOrder(id, oldPrice, newPrice) {
    return new Promise((resolve, reject) => {
      pool.query(`UPDATE orders SET old_price_offered = ${oldPrice}, new_price_offered = ${newPrice} WHERE id = ${id} returning *`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }
}


export default orders;
