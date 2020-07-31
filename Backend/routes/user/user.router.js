const {Router} = require('express');
const {
    feedController: {addFeed, deleteFeed, getFeeds},
    userController: {login}
} = require('../../controllers');
const {
    feedMiddleware: {isFeedExist, isFeedValid, isUserIdFeedIdValid},
    userMiddleware: {isUserExist, isUserValid, isUserIdValid}
} = require('../../middlewares');

const userRouter = Router();

userRouter.post('/', isUserValid, isUserExist, login);
userRouter.get('/:userId/feeds', isUserIdValid, getFeeds);
userRouter.post('/:userId/feeds', isUserIdValid, isFeedValid, isFeedExist, addFeed);
userRouter.delete('/:userId/feeds/:feedId', isUserIdFeedIdValid, deleteFeed);

module.exports = userRouter;
