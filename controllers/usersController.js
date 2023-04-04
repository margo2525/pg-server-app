const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const createdUser = await User.create(body);
    res.status(201).send(createdUser);
  } catch (err) {
    next(err);
  }
};
module.exports.updateUser = async (req, res, next) => {
  console.log('req.params.userId :>> ', req.params.userId);

  const { body, params: userId } = req;

  try {
    const updatedUser = await User.updateById(userId, body);
    if (updatedUser) {
      return res.status(204).send();
    }
    res.status(404).send('User Not Found');
  } catch (err) {
    next(err);
  }
};
module.exports.getUsers = async (req, res, next) => {
  try {
    const foundUsers = await User.getAll();
    res.status(200).send(foundUsers);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const deletedUser = await User.deleteById(userId);

    if (deletedUser) {
      return res.status(204).send();
    }

    res.status(404).send('User Not Found');
  } catch (err) {
    next(err);
  }
};
