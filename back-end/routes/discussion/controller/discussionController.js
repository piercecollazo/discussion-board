const Post = require('../../category/Post');
const User = require('../../users/model/User');
const Topic = require('../../category/Topic');
const Category = require('../../category/Category')

module.exports = {
  createTopic: async (req, res) => {
    let categoryId = req.params.catId
    let userId = req.params.userId
    try{
      console.log('-----createTopic fired------')
      let foundCategory = await Category.findById(categoryId)
      let newTopic = await new Topic({
        user_id: userId,
        category_id: categoryId,
        title: req.body.title
      })
      let savedTopic = await newTopic.save()
      await foundCategory.topics.push(savedTopic)
      await foundCategory.save()
      res.status(200).json(savedTopic)
    } catch(error){
      res.status(500).json(error);
    }
  },

  createPost: async (req, res) => {
    console.log(req.body.id)
    let topicId = req.params.topicId;
    let post = req.body.content;
    let userId = req.params.userId

    try { 
      let foundTopic = await Topic.findById(topicId);
      let newPost = await new Post({
        content: post,
        user_id: userId,
        topic_id: topicId
      });
      let savedNewPost = await newPost.save();
      await foundTopic.posts.push(savedNewPost);
      await foundTopic.save(); 
      res.status(200).json(savedNewPost);
    } catch (error) {
        console.log(error)
      res.status(500).json(error);
    }
  },
  

  deleteByID: async (req, res) => {
    const id = req.params.id;

    try {
      let deletedByID = await Topic.findByIdAndRemove(id);

      res.status(200).json(deletedByID)

    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  },
  
  getAllUserDiscussionPosts: async (req, res) => {

    const id = req.params.id;

    try {
      let allUserPost = await User.findById({_id: id}).populate('topics').exec();

      res.status(200).json(allUserPost.topics)

    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  },

  getAllPostsByTopic: async (req, res) => {

    const id = req.params.id;

    try {
      let allPosts = await Topic.findById({_id: id}).populate('post').exec();

      res.status(200).json(allPosts)

    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  }
}