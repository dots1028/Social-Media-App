import Post from '../models/postModel.js';

export const createPost = async (req, res) => {
  const { content, media } = req.body;
  if (content.length > 280) {
    return res.status(400).json({ error: 'Post content exceeds 280 characters' });
  }
  const newPost = new Post({ content, author: req.user.id, media });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: 'Post creation failed' });
  }
};

export const editPost = async (req, res) => {
  const { content } = req.body;
  if (content.length > 280) {
    return res.status(400).json({ error: 'Post content exceeds 280 characters' });
  }
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, { content }, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ error: 'Post update failed' });
  }
};

export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Post deletion failed' });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: 'Fetching posts failed' });
  }
};
