import { Router } from 'express';
import { UserController } from 'src/controller/userController';
import UserService from 'src/services/userService';

const router = Router();
const userService = new UserService();
const userController = new UserController(userService);

export function setUserRoutes(app: Router) {
    app.post('/users', userController.createUser.bind(userController));
    app.get('/users', userController.getAllUsers.bind(userController));
    app.get('/users/:id', userController.getUserById.bind(userController));
    app.delete('/users/:id', userController.deleteUser.bind(userController));
}

export default router;