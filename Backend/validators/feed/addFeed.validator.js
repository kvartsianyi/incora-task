const Joi = require('joi');

const {regexpEnum: {feedLink}} = require('../../constants');

module.exports = Joi.object().keys({
    feedName: Joi.string().min(3).max(60).required(),
    feedLink: Joi.string().min(8).max(255).regex(feedLink).required()
});
