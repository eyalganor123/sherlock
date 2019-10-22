class UserActions {

    constructor(service) {
        this.service = service;
    }

    fetchUsers() {
        return this.service.fetchUsers();
    }

    setCurrentUser(userId) {
                
    }
}
