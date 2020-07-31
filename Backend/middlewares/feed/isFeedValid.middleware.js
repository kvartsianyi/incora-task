const Joi = require('joi');

const {httpStatusCodeEnum: {BAD_REQUEST}} = require('../../constants');
const {ErrorHandler} = require('../../errors');
const {feedValidator: {addFeed}} = require('../../validators');


module.exports = async (req, res, next) => {
    const feed = req.body;
    const {error} = Joi.validate(feed, addFeed);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST));
    }

    next();
};
