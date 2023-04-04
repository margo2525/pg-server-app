const { Phone } = require('../models');

module.exports.getPhones = async (req, res, next) => {
  const { pagination } = req;
  try {
    const foundPhones = await Phone.getPhones({ pagination });
    res.status(200).send(foundPhones);
  } catch (err) {
    next(err);
  }
};
