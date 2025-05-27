class UserService {
    private users: { id: number; name: string; email: string }[] = [];
    private nextId: number = 1;

    public createUser(name: string, email: string) {
        const newUser = { id: this.nextId++, name, email };
        this.users.push(newUser);
        return newUser;
    }

    public getAllUsers() {
        return this.users;
    }

    public getUserById(id: number) {
        return this.users.find(user => user.id === id) || null;
    }

    public deleteUser(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            return this.users.splice(index, 1)[0];
        }
        return null;
    }
}

export default UserService;