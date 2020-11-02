const { Router } = require('express');
const { getUsers, createUser, deleteUser } = require('../controllers/users.controller');
const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUser);
router.route('/:id')
//     .get()
//     .put()
     .delete(deleteUser);

module.exports = router;