let db = require('../../database').getInstance();
const {modelNameEnum: {FEED}} = require('../../constants');

class FeedService {
    getFeedsByParams(params) {
        const FeedModel = db.getModel(FEED);

        return FeedModel.findAll({
            where: params
        });
    }

    getFeedByParams(params) {
        const FeedModel = db.getModel(FEED);

        return FeedModel.findOne({
            where: params
        });
    }

    addFeed(feed) {
        const FeedModel = db.getModel(FEED);
        return FeedModel.create(feed);
    }

    deleteFeed(params) {
        const FeedModel = db.getModel(FEED);

        return FeedModel.destroy({
            where: params
        });
    }
}

module.exports = new FeedService;
