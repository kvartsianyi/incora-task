const Joi = require('joi');

const {httpStatusCodeEnum: {NOT_FOUND}} = require('../../constants');
const {ErrorHandler} = require('../../errors');
const {userValidator: {userValidator}} = require('../../validators');


module.exports = async (req, res, next) => {
    const user = req.body;
    const {error} = Joi.validate(user, userValidator);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, NOT_FOUND));
    }

    next();
};
