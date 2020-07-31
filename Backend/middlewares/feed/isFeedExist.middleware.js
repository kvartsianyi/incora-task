const {httpStatusCodeEnum: {BAD_REQUEST}} = require('../../constants');
const {ErrorHandler} = require('../../errors');
const {feedService: {getFeedByParams}} = require('../../services');

module.exports = async (req, res, next) => {
    const {userId} = req.params;
    const {feedLink} = req.body;
    const feedFromDb = await getFeedByParams({userId, feedLink});

    if (feedFromDb) {
        return next(new ErrorHandler('This feed is already added', BAD_REQUEST));
    }

    next();
};
