declare class UserService {
    private users;
    private nextId;
    createUser(name: string, email: string): {
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
export default UserService;
