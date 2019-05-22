import userModel from '../model/user';

const createUsers = (req, res) => {
  const newUser = {
    id: 23,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    address: req.body.address,
    is_admin: 'false',
  };

  userModel.push(newUser);
  console.log('this is the user', newUser);
  return res.status(201).json({
    status: 201,
    result: newUser,
  });
};


const UserController = {
  createUsers,
};

export default UserController;
