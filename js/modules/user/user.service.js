class UserService {

  constructor(state) {
    this.state = state;
  }
  /**
   * @return array of userModel { name: string, id: string }
   */
  fetchUsers() {
    this.state.users = [{ id: '0', name: 'gal' }, {id: '1', name: 'eyal'}];
  }

  setCurrentUser(currentUser) {
    /**
     * Set the current user
     * 1. check if currentUser is already set
     * 2. if not set the first user
     * 3. if it is set set the current user to be the next on users list
     * 4. test this function to make sure it returns to the first user after cycle is complete
     */

    // this is temporary (should set it to the real current user by above logic)
    this.state.currentUser = currentUser;
  }

  getCurrentUser() {
    return this.state.currentUser;
  }
}