"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserRoutes = setUserRoutes;
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const userService_1 = require("../services/userService");
const router = (0, express_1.Router)();
const userService = new userService_1.default();
const userController = new userController_1.UserController(userService);
function setUserRoutes(app) {
    app.post('/users', userController.createUser.bind(userController));
    app.get('/users', userController.getAllUsers.bind(userController));
    app.get('/users/:id', userController.getUserById.bind(userController));
    app.delete('/users/:id', userController.deleteUser.bind(userController));
}
exports.default = router;
//# sourceMappingURL=userRoutes.js.map