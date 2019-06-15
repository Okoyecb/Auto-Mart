export default {
  userTable: ` CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR UNIQUE NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    token VARCHAR NOT NULL,
    is_admin BOOLEAN NOT NULL
  )`,

  carTable: `CREATE TABLE IF NOT EXISTS car(
    id SERIAL PRIMARY KEY,
    owner VARCHAR NOT NULL,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    state VARCHAR NOT NULL,
    status VARCHAR NOT NULL,
    price NUMERIC NOT NULL,
    manufacturer VARCHAR NOT NULL,
    model VARCHAR NOT NULL,
    body_type VARCHAR NOT NULL
  )`,

  orderTable: `CREATE TABLE IF NOT EXISTS orders(
    id SERIAL PRIMARY KEY,
    buyer VARCHAR NOT NULL,
    car_id INTEGER REFERENCES car (id),
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR NOT NULL,
    price_offered NUMERIC NOT NULL
  )`,
};
