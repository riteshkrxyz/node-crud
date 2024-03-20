const express = require('express');
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require('../controllers/user');
const router = express.Router();

router.get('/', handleGetAllUsers);

router.route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

router.post('/', handleCreateNewUser)

module.exports = router;