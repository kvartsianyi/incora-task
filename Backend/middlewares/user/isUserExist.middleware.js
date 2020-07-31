const {httpStatusCodeEnum: {BAD_REQUEST}} = require('../../constants');
const {ErrorHandler} = require('../../errors');
const {userService: {getUserByParams}} = require('../../services');

module.exports = async (req, res, next) => {
    const {login, password} = req.body;
    const userFromDb = await getUserByParams({login, password});

    if (!userFromDb) {
        return next(new ErrorHandler('User not found', BAD_REQUEST));
    }

    req.user = userFromDb;

    next();
};
