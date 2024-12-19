import express from 'express';
import * as UserController from '../app/controller/UserController.js';
import AuthMiddlware from "../app/middleware/AuthMiddlware.js";
const router = express.Router();

router.post('/registration', UserController.Register)
router.post('/login', UserController.Login)
router.get('/singleUserProfile', AuthMiddlware, UserController.SingleUserProfile)
router.get('/AllUser', AuthMiddlware, UserController.AllUserProfile)
router.post('/singleUserProfileUpdate', AuthMiddlware, UserController.SingleUserProfileUpdate)
router.delete('/deleteSingleUser/:id', AuthMiddlware, UserController.DeleteSingleUser)

export default router;