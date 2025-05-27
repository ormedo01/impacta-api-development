"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    users = [];
    nextId = 1;
    createUser(name, email) {
        const newUser = { id: this.nextId++, name, email };
        this.users.push(newUser);
        return newUser;
    }
    getAllUsers() {
        return this.users;
    }
    getUserById(id) {
        return this.users.find(user => user.id === id) || null;
    }
    deleteUser(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            return this.users.splice(index, 1)[0];
        }
        return null;
    }
}
exports.default = UserService;
//# sourceMappingURL=userService.js.map