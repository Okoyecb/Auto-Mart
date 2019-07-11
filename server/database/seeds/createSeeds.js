import bcrypt from 'bcrypt';
import moment from 'moment';


const seedTable = {
  userTable: `INSERT INTO users(first_name, last_name, email, password, address, token)
  VALUES ('James', 'Okoye', 'jamiecb@gmail.com','${bcrypt.hashSync('ch2123', 10)}', 'No 80 Kolawole street', ''),
  ('Chidi', 'Okoye', 'Okoyecb@gmail.com','${bcrypt.hashSync('chi123', 10)}', 'No 30 Kolawole street', ''),
  ('Rita', 'Okoye', 'Rita22@gmail.com','${bcrypt.hashSync('chiii123', 10)}', 'No 70 Ishola street', ''),
  ('Theresa', 'Okoye', 'ttre@gmail.com','${bcrypt.hashSync('teresa21', 10)}', 'Bankole Avenue Osapa London', '')
   `,

  carTable: `INSERT INTO car(owner, created_on, state, status, price, manufacturer, model, image, body_type)
  VALUES ('1', to_date('${moment('2019-11-11').format('YYYY-MM-DD')}', 'YYYY MM DD'), 'New', 'available', '12200000', 'BMW', 'X6', '', 'SUV'),
  ('2', to_date('${moment('2019-11-11').format('YYYY-MM-DD')}', 'YYYY MM DD'), 'Used', 'available', '23200000', 'Toyota', 'Corolla', '', 'Sedan'),
  ('3', to_date('${moment('2019-11-11').format('YYYY-MM-DD')}', 'YYYY MM DD'), 'New', 'sold', '2200000', 'Honda', 'Accord', '', 'Sedan'),
  ('4', to_date('${moment('2019-11-11').format('YYYY-MM-DD')}', 'YYYY MM DD'), 'New', 'available', '4200000', 'Volks', 'Passat', '', 'FWD')
  `,

  orderTable: `INSERT INTO orders(buyer, car_id, created_on, status, price_offered, old_price_offered, new_price_offered)
  VALUES ('3', '1', to_date('${moment('2019-11-11').format('YYYY-MM-DD')}', 'YYYY MM DD'), 'Pending', '1000000',  NULL, NULL),
  ('2', '2', to_date('${moment('2019-11-11').format('YYYY-MM-DD')}', 'YYYY MM DD'), 'Pending', '3500000', NULL, NULL),
  ('1', '3', to_date('${moment('2019-11-11').format('YYYY-MM-DD')}', 'YYYY MM DD'), 'Sold', '1500000',  NULL, NULL)
  `,

};

export default seedTable;
