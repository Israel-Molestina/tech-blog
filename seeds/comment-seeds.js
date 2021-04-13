const { Comment } = require('../models');

const commentData = [
  {
    comment_message: 'To get to the other side',
    user_id: 1,
    post_id: 2,
  },
  {
    comment_message: 'At least booze is free',
    user_id: 2,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
