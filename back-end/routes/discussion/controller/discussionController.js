const Discussion = require('../model/Discussion');
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

//   createPost: async (req, res) => {
//     console.log(req.body.id)
//     let id = req.body.id;
//     let post = req.body.post;
//     let title = req.body.title;
//     let image = req.body.image;

//     try { 
//       let foundUser = await User.findById(id);
//       let newDiscussion = await new Discussion({
//         title: title,
//         post: post,
//         image: image, 
//         user_id: id
//       });
//       let savedNewDiscussion = await newDiscussion.save();
//       await foundUser.discussions.push(savedNewDiscussion);
//       await foundUser.save(); 
//       res.status(200).json(savedNewDiscussion);
//     } catch (error) {
//         console.log(error)
//       res.status(500).json(error);
//     }
//   },
  
  deleteByPost: async (req, res) => {
    const id = req.params.postId;

    try {
      let deletedByPost = await Post.findByIdAndRemove(id);

      res.status(200).json(deletedByPost)

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

  }
}