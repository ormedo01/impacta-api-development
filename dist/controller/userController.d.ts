import { UserRequest } from '../types';
import UserService from 'src/services/userService';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(userData: UserRequest): {
        id: number;
        name: string;
        email: string;
    };
    getAllUsers(): {
        id: number;
        name: string;
        email: string;
    }[];
    getUserById(id: number): {
        id: number;
        name: string;
        email: string;
    } | null;
    deleteUser(id: number): {
        id: number;
        name: string;
        email: string;
    } | null;
}
