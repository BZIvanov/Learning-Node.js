const User = require('../models/User');
const Thread = require('../models/Thread');
const Message = require('../models/Message');

module.exports = {
    // async and awaits must always be wrapped in try catch block in case of error
    findUser: async (req, res) => {
        try {
            let currentUser = req.user;
            let otherUser = await User.findOne({
                username: req.body.username
            });

            if (otherUser) {
                let targetThread = await Thread.find({ users: { $all: [currentUser, otherUser] } });
    
                if (targetThread.length > 0) {
                    let messages = await Message.find({ thread: targetThread._id});
    
                    res.render('thread/chat', { username, messages });
                } else {
                    Thread.create({
                        users: [searcherName, username]
                    })
                    .then((newThread) => {
                        res.render('thread/chat', { username });
                    })
                    .catch(console.error);
                }
            } else {
                res.render('home/index', { username });
            }
        } catch (err) {
            console.log(err);
        }
    },

    sendMessage: (req, res) => {
        const { message, threadId } = req.body;

        res.render('thread/chat');
    }
}
