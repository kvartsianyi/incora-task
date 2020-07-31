const {httpStatusCodeEnum: {BAD_REQUEST}} = require('../../constants');
const {ErrorHandler} = require('../../errors');
const {feedService: {getFeedByParams}} = require('../../services');

module.exports = async (req, res, next) => {
    const {userId, feedId} = req.params;

    const feedFromDb = await getFeedByParams({id: feedId, userId});

    if (!feedFromDb) {
        return next(new ErrorHandler('Feed not found', BAD_REQUEST));
    }

    next();
};
