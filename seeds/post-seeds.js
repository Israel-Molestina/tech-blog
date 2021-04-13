const { Post } = require('../models');

const postData = [
  {
    post_title: 'Airplane',
    post_content: 'Whats up with airplane food',
    user_id: 1,
  },
  {
    post_title: 'Chicken',
    post_content: 'Why did the Chicken cross the road',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
