'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('feeds', [
            {
                userId: 1,
                feedName: 'NASA Breaking news',
                feedLink: 'https://www.nasa.gov/rss/dyn/breaking_news.rss',
            },
            {
                userId: 1,
                feedName: 'Reddit front page',
                feedLink: 'https://www.reddit.com/.rss',
            },
            {
                userId: 1,
                feedName: 'Mobile World Live',
                feedLink: 'https://www.mobileworldlive.com/latest-stories/feed',
            },

          {
            userId: 2,
            feedName: 'NASA Breaking news',
            feedLink: 'https://www.nasa.gov/rss/dyn/breaking_news.rss',
          },
          {
            userId: 2,
            feedName: 'Reddit front page',
            feedLink: 'https://www.reddit.com/.rss',
          },
          {
            userId: 2,
            feedName: 'Mobile World Live',
            feedLink: 'https://www.mobileworldlive.com/latest-stories/feed',
          }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
