const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

router
    ,route('/')
        .get(getAllThoughts);

router 
    .route('/:id')
        .get(getThoughtById)
        .put(updateThought)
        .delete(deleteThought)

router
    ,route('/:userId')
        .post(createThought);

module.exports = router;