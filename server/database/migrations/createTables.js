export default {
  userTable: ` CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    token VARCHAR NOT NULL,
    is_admin BOOLEAN DEFAULT false
  )`,

  carTable: `CREATE TABLE IF NOT EXISTS car(
    id SERIAL PRIMARY KEY,
    owner INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE, 
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    state VARCHAR NOT NULL,
    status VARCHAR NOT NULL,
    price NUMERIC NOT NULL,
    manufacturer VARCHAR NOT NULL,
    model VARCHAR NOT NULL,
    image VARCHAR,
    body_type VARCHAR NOT NULL
  )`,

  orderTable: `CREATE TABLE IF NOT EXISTS orders(
    id SERIAL PRIMARY KEY,
    buyer INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    car_id INTEGER REFERENCES car (id) ON DELETE CASCADE ON UPDATE CASCADE,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR DEFAULT 'Pending',
    price_offered NUMERIC NOT NULL,
    old_price_offered NUMERIC,
    new_price_offered NUMERIC
  )`,
};
