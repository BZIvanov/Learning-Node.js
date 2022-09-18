const User = require('../models/User');
const Thread = require('../models/Thread');
const Message = require('../models/Message');

// async and awaits must always be wrapped in try catch block in case of error
const findUser = async (req, res) => {
  try {
    const currentUser = req.user;
    let otherUser = await User.findOne({
      username: req.body.username,
    });
    let otherUserUsername = req.body.username;

    if (otherUser) {
      const targetThread = await Thread.find({
        users: { $all: [currentUser._id, otherUser._id] },
      });

      if (targetThread.length > 0) {
        const targetThreadId = targetThread[0].id.toString();
        const messages = await Message.find({ thread: targetThreadId }).lean();

        const mapMessages = messages.map((x) => {
          if (x.user.toString() === currentUser.id.toString()) {
            x.direction = 'right';
          } else {
            x.direction = 'left';
          }

          if (
            x.content.startsWith('http://') ||
            x.content.startsWith('https://')
          ) {
            x.isImage = true;
          } else {
            x.isImage = false;
          }

          return x;
        });

        res.render('thread/chat', {
          otherUserUsername,
          messages: mapMessages,
          targetThreadId,
        });
      } else {
        const targetThread = await Thread.create({
          users: [currentUser._id, otherUser.id],
        });

        const targetThreadId = targetThread._id.toString();

        res.render('thread/chat', { otherUserUsername, targetThreadId });
      }
    } else {
      res.render('home/index', { otherUserUsername });
    }
  } catch (err) {
    console.log(err);
  }
};

const sendMessage = async (req, res) => {
  const { message, threadId } = req.body;

  try {
    const currentUser = req.user;
    const thread = await Thread.findById(threadId);
    const newMessage = new Message({
      content: message,
      user: currentUser.id.toString(),
      thread: threadId,
    });

    await newMessage.save();

    const targetThreadId = thread.id;
    let otherUserUsername = await User.findById(thread.users[1]);
    otherUserUsername = otherUserUsername.username;

    const messages = await Message.find().lean();

    const mapMessages = messages.map((x) => {
      if (x.user.toString() === currentUser.id.toString()) {
        x.direction = 'right';
      } else {
        x.direction = 'left';
      }

      if (x.content.startsWith('http://') || x.content.startsWith('https://')) {
        x.isImage = true;
      } else {
        x.isImage = false;
      }

      return x;
    });

    res.render('thread/chat', {
      otherUserUsername,
      messages: mapMessages,
      targetThreadId,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findUser,
  sendMessage,
};
