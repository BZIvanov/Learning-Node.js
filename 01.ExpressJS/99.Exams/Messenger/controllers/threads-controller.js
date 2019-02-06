const User = require('../models/User');

module.exports = {
    findUser: async (req, res) => {
        const { username } = req.body;
        
        const targetUser = await User.findOne({ username: username });

        if (targetUser) {

        } else {
            res.render('home/index', { username });
        }
    }
}
