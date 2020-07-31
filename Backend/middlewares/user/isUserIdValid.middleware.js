const Joi = require('joi');

const {httpStatusCodeEnum: {BAD_REQUEST}} = require('../../constants');
const {ErrorHandler} = require('../../errors');
const {userValidator: {userIdValidator}} = require('../../validators');

module.exports = async (req, res, next) => {
    const {userId} = req.params;
    const {error} = Joi.validate(userId, userIdValidator);
    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST));
    }

    next();
};
