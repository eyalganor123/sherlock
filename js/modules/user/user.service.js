class UserService {

  constructor(state) {
    this.state = state;
  }
  /**
   * @return userModel { name: string, id: string }
   */
  fetchUsers() {
    this.state.users = [{ id: '0', name: 'gal' }, {id: '1', name: 'eyal'}];
  }

  setCurrentUser(currentUser) {
    this.state.currentUser = currentUser;
  }

  getCurrentUser() {
    return this.state.currentUser;
  }
}