const { Store, Product } = require("../models");
const { Op } = require("sequelize");

exports.getStoreProducts = async (storeId, options = {}) => {
  const { sortBy, filterBy = [] } = options;
  const [ sortByKey, sortOrder ] = sortBy?.split("-");

  const whereCondition = {};

  // Add topping filter
  if (filterBy.length > 0) {[Op.and]
    whereCondition.toppings = {
      [Op.or]: filterBy.map(name => { 
        return {
          [Op.like]: `%${name}%`,
        }
      })
    }
  }

  console.log(whereCondition.toppings);

  const products = await Product.findAll({
    where : whereCondition,
    include: [{
      model: Store,
      as: 'stores',
      where: { id : storeId },
      attributes: [],
   }],
    order: [
      [sortByKey, sortOrder],
    ],
  });

  return products;
};