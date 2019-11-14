const Category = require('../Category');
const User = require('../../users/model/User');
const Topic = require('../Topic');


module.exports = {

getAllCategory: async (req, res) => {
    try {
      let foundCategory = await Category.find({})

      res.status(200).json(foundCategory)

    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  },



  createCategory: async (req, res) => {
    //console.log(req.body.id)
    let id = req.body.id;
    let categoryName = req.body.categoryName;
    // let topic_id = req.body.

    try { 
      let foundUser = await User.findById(id);

      let newCategory = await new Category({
        categoryName: categoryName, 
        user_id: id
      });

      let savedNewCategory = await newCategory.save();
   
      console.log(foundUser)
      await foundUser.categories.push(savedNewCategory);
     
      await foundUser.save(); 
      res.status(200).json(savedNewCategory);
    } catch (error) {
        console.log(error)
      res.status(500).json(error);
    }
  },


//   createTopic: async (req, res) => {
//         let categoryID = req.body.category_id;
//         let user_id = req.body.userId;
//         let title = req.body.title;
//         let post = req.body.post;
//         let image = req.body.image;
    

//     try { 
//       let foundCategory = await Category.findById(categoryID);

//       let newTopic = await new Topic({
//         title: title,
//         post: post,
//         image: image, 
//         user_id: user_id,
//         category_id: categoryID
//       });

//       let savedTopic = await newTopic.save();
   
      
//       await foundCategory.topics.push(savedTopic);
     
//       await foundCategory.save(); 
//       res.status(200).json(savedTopic);
//     } catch (error) {
//         console.log(error)
//       res.status(500).json(error);
//     }
//   },

  getDiscussionByTopic: async (req, res) => {
    const id = req.params.id; 
    try {
      let foundCategoryTopic = await Topic.findById({_id: id});
      res.status(200).json(foundCategoryTopic);
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  },

}