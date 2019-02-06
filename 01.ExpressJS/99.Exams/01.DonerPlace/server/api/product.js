const Product = require('mongoose').model('Product');

const allowedToppings = ['pickle', 'tomato', 'onion', 'lettuce', 'hot sauce', 'extra sauce'];

async function create(data) {
    const { 
        category,
        size,
        imageUrl
    } = data;

    const toppings = data.toppings.split(',')
        .map((e) => e.trim())
        .filter((x) => x.length > 0 && allowedToppings.includes(x));
        
    return await Product.create({
        category,
        size: Number(size),
        imageUrl,
        toppings
    });
}

async function getAll() {
    const products = await Product.find({});
    const chicken = products.filter(p => p.category === 'chicken');
    const beef = products.filter(p => p.category === 'beef');
    const lamb = products.filter(p => p.category === 'lamb');
    return {
        chicken,
        beef,
        lamb
    }
}

module.exports = {
    create,
    getAll
}