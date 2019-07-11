/* eslint-disable camelcase */
import moment from 'moment';
import pool from '../database/connections';


class cars {
  static createCar(details) {
    const carDetails = {
      owner: details.owner,
      created_on: moment().format(),
      state: details.state,
      status: details.status,
      price: details.price,
      manufacturer: details.manufacturer,
      model: details.model,
      image: details.image ? details.image : '',
      body_type: details.body_type,
    };
    return new Promise((resolve, reject) => {
      pool.query(`INSERT INTO car ( owner, created_on, state, status, price, manufacturer, model, image, body_type) VALUES ('${carDetails.owner}', '${carDetails.created_on}','${carDetails.state}', '${carDetails.status}', '${carDetails.price}', '${carDetails.manufacturer}','${carDetails.model}', '${carDetails.image}', '${carDetails.body_type}') returning *`)
        .then(results => resolve(results))
        .catch(error => reject(error));
    });
  }

  static getAllCars() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM car')
        .then(results => resolve(results))
        .catch(error => reject(error));
    });
  }

  static getCar(id) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM car WHERE id = ${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static deleteCar(id) {
    return new Promise((resolve, reject) => {
      pool.query(`DELETE FROM car WHERE id = ${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static carStatus(status) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM car WHERE status = '${status}'`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static priceRange(min_price, max_price) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM cars WHERE price BETWEEN '${min_price}' AND '${max_price}'`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static updateCarStatus(id, status) {
    return new Promise((resolve, reject) => {
      pool.query(`UPDATE car SET status = '${status}' WHERE id = ${id} returning *`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static getSpecificBodytype(body_type) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM car WHERE body_type = '${body_type}'`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static carStatusAndState(status, state) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM car WHERE status = '${status}' and state = '${state}'`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  static availableAndManufacturer(status, manufacturer) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM car WHERE status = '${status}' and manufacturer = '${manufacturer}'`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  // static UsedAvailableCars() {
  //   return new Promise((resolve, reject) => {
  //     pool.query()
  //       .then(response => resolve(response))
  //       .catch(error => reject(error));
  //   });
  // }
}


export default cars;
