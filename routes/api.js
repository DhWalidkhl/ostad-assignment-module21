import express from 'express';
import * as UserController from '../app/controller/UserController.js';
const router = express.Router();

router.post('/registration', UserController.Register)
router.post('/login', UserController.Login)
router.post('/singleUserProfile', UserController.SingleUserProfile)
router.post('/AllUser', UserController.AllUserProfile)
router.post('/singleUserProfileUpdate', UserController.SingleUserProfileUpdate)
router.post('/deleteSingleUser', UserController.DeleteSingleUser)

export default router;