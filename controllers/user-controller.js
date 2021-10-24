const {User } = require('../models');

const userController = {

    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
                .then(dbUserData => res.json(dbUserData))
                .catch(err => {
                    console.log(err);
                    res.sendStatus(400);
                });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
                .then(dbUserData => res.json(dbUserData))
                .catch(err => {
                    console.log(err);
                    res.sendStatus(400);
                });
    },

    updateUser({ params, body }, res)  {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true})
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    }
};

module.exports = userController;