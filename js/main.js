var services, actions, state;

setup();
init();

function setup() {
  states = initStates();
  services = initServices(states);
  actions = initActions(services, states);
}

function init() {
  var users = services.user.fetchUsers();
  console.log(states.user);
}

function initServices(states) {
  return {
    user: new UserService(states.user)
  }
}

function initActions(services, states) {
  return {
    user: new UserActions(services.user),
  }
}

function initStates() {
  return {
    user: userState,
  }
}
