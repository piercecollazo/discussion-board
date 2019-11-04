const Discussion = require('../model/Discussion');
const User = require('../../users/model/User');

module.exports = {

  getAllDiscussions: async (req, res) => {

    try {
      let allDiscussions = await Discussion.find({})
      
      res.status(200).json(allDiscussions);                 

    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }


  },

  createDiscussion: async (req, res) => {
    console.log(req.body.id)
    let id = req.body.id;
    let discussion = req.body.discussion;
    let title = req.body.title;
    let image = req.body.image;

    try { 
      let foundUser = await User.findById(id);
      let newDiscussion = await new Discussion({
        title: title,
        discussion: discussion,
        image: image, 
        user_id: id
      });
      let savedNewDiscussion = await newDiscussion.save();
      await foundUser.Discussions.push(savedNewDiscussion);
      await foundUser.save(); 
      res.status(200).json(savedNewDiscussion);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getDiscussionByID: async (req, res) => {
    const id = req.params.id; 
    try {
      let foundDiscussion = await Discussion.findById({_id: id});
      res.status(200).json(foundDiscussion);
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  },
  deleteByID: async (req, res) => {
    const id = req.params.id;

    try {
      let deletedByID = await Discussion.findByIdAndRemove(id);

      res.status(200).json(deletedByID)

    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  },
  getAllUserDiscussions: async (req, res) => {

    const id = req.params.id;

    try {
      let allUserDiscussions = await User.findById({_id: id}).populate('discussions').exec();

      res.status(200).json(allUserDiscussions.discussions)

    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  }
}