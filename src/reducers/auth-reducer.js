const defaultState = {};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { uid: action.uid };
    
    case 'USER_LOGOUT':
      return defaultState;
    
    default:
      return state;
  }
};

export default authReducer;
