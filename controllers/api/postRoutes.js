const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.update(
      {
        post_title: req.body.post_title,
        post_content: req.body.post_content,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/edit/:id', withAuth, async (req, res) => {
    console.log(req.body)
    console.log(req.params)
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        
        console.log(postData)
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;
