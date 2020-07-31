const {httpStatusCodeEnum: {CREATED, OK}} = require('../../constants');
const {feedService: {addFeed, deleteFeed, getFeedsByParams}} = require('../../services');

module.exports = {
    getFeeds: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const userFeeds = await getFeedsByParams({userId});

            res.status(OK).json(userFeeds);
        } catch (e) {
            next(e);
        }
    },

    addFeed: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const feed = req.body;

            feed.userId = userId;

            await addFeed(feed);

            res.status(CREATED).json({});
        } catch (e) {
            next(e);
        }

    },

    deleteFeed: async (req, res, next) => {
        const {userId, feedId} = req.params;

        await deleteFeed({id: feedId, userId});

        res.status(OK).json({});
    },
};
