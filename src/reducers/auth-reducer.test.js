import authReducer from './auth-reducer';

describe('Auth reducer', () => {
  const defaultState = {};
  
  test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    
    expect(state).toEqual(defaultState);
  });
  
  test('should set uid on login', () => {
    const uid = 'S0meRand0mText';
    const state = authReducer(undefined, { type: 'USER_LOGIN', uid });
    
    expect(state).toEqual({ ...defaultState, uid });
  });
  
  test('should unset uid on logout', () => {
    const state = authReducer({ uid: 'S0meRand0mText' }, { type: 'USER_LOGOUT'});
    
    expect(state).toEqual({ ...defaultState});
  });
});
