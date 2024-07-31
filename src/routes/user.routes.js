import { Router } from "express";
import { getAllUsers, getUserById, createUser, updateUser, updateUserByPatch, deleteUserById } from "../controllers/user.controller.js";

export const userRoutes = Router()

userRoutes
    .get('/', getAllUsers)
    .get('/:userId', getUserById)
    .post('/', createUser)
    .put('/:userId', updateUser)
    .patch('/:userId', updateUserByPatch)
    .delete('/:userId', deleteUserById)