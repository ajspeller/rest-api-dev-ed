const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

// routers
router.get('/:id', async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id);
    res.json(posts);
  } catch (e) {
    res.json({ message: e });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (e) {
    res.json({ message: e });
  }
});

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (e) {
    res.json({ message: e });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removedPost = await Post.remove({
      _id: req.params.id
    });
    res.json(removedPost);
  } catch (e) {
    res.json({ message: e });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const updated = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updated);
  } catch (e) {
    res.json({ message: e });
  }
});

module.exports = router;
