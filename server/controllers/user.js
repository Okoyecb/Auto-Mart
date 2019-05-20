import UserModel from '../model/user';

const createUsers = (req, res) => {
  console.log(res);
  return res.status(201).json({
    status: 201,
  });
};

const UserController = {
  createUsers,
};

export default UserController;
