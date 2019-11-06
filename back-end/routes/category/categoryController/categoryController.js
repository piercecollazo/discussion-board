const Category = require('../Category');

module.exports = {

getDiscussionByCategoryID: async (req, res) => {
    const id = req.params.id; 
    try {
      let foundCategory = await Category.findById({_id: id});
      res.status(200).json(foundCategory);
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }

  },

}