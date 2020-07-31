const {httpStatusCodeEnum: {OK}} = require('../../constants');

module.exports = {
    login: (req, res, next) => {
        const {id} = req.user;

        res.status(OK).json({userId: id});
    }
};
