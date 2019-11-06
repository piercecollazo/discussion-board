const Category = require('../Category');
const CategoryPolitics = require('../CategoryPolitics');
const CategoryGeneral = require('../CategoryGeneral');
const CategorySports = require('../CategorySports');



module.exports = {

getDiscussionByAllCategoryID: async (req, res) => {
    const id = req.params.id; 
    try {
      let foundAllCategory = await Category.findById({_id: id});
      res.status(200).json(foundAllCategory);
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  },

  getDiscussionByCategoryPoliticsID: async (req, res) => {
    const id = req.params.id; 
    try {
      let foundCategoryPolitics = await CategoryPolitics.findById({_id: id});
      res.status(200).json(foundCategoryPolitics);
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  },
  getDiscussionByCategoryGeneralID: async (req, res) => {
    const id = req.params.id; 
    try {
      let foundCategoryGeneral = await CategoryGeneral.findById({_id: id});
      res.status(200).json(foundCategoryGeneral);
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  },

  getDiscussionByCategorySportsID: async (req, res) => {
    const id = req.params.id; 
    try {
      let foundCategorySports = await CategorySports.findById({_id: id});
      res.status(200).json(foundCategorySports);
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  },



}