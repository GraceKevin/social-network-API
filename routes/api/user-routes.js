const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

router  
    .route('/:id')
        .get(getUserById)
        .put(updateUser)
        .delete(deleteUser);

router
    .route('/')
        .get(getAllUsers)
        .post(createUser);

module.exports = router;