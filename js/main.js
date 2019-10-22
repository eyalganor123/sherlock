var services, actions, state;

setup();
init();

function setup() {
  states = initStates();
  services = initServices(states);
}

function init() {
  services.user.fetchUsers();
  console.log(states.user);
}

function initServices(states) {
  return {
    user: new UserService(states.user)
  }
}

function initStates() {
  return {
    user: userState,
  }
}
