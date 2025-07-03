const products = [];

// first create products empty object and below attach functions to the empty object working with the array
module.exports.products = {};

module.exports.products.getAll = () => products;

module.exports.products.add = (product) => {
  product.id = products.length + 1;
  products.push(product);
};

module.exports.products.findByName = (name) => {
  for (const product of products) {
    if (product.name === name) {
      return product;
    }
  }

  return null;
};
