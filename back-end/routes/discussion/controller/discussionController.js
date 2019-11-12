const Post = require('../../category/Post');
const User = require('../../users/model/User');

module.exports = {

//   getAllDiscussions: async (req, res) => { 

//     try {
//       let allDiscussions = await Discussion.find({})
      
//       res.status(200).json(allDiscussions);                 

//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }


//   },

  createPost: async (req, res) => {
    console.log(req.body.id)
    let id = req.body.id;
    let post = req.body.post;
    let title = req.body.title;
    let image = req.body.image;

    try { 
      let foundTopic = await Topic.findById(id);
      let newPost = await new Post({
        title: title,
        post: post,
        image: image, 
        user_id: id
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
  
//   deleteByPost: async (req, res) => {
//     const id = req.params.postId;

//     try {
//       let deletedByPost = await Post.findByIdAndRemove(id);

//       res.status(200).json(deletedByPost)

//     } catch (error) {
//       console.log(error)
//       res.status(500).json(error);
//     }
//   },

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

  }
}