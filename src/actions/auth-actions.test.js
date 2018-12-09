import { userLogin, userLogout, startLogin, startLogout } from './auth-actions';

describe('Auth actions generator', () => {
  test('userLogin should return correct action object', () => {
    const uid = 'S0meRand0mText';
    const action = userLogin(uid);
    
    expect(action).toEqual({
      type: 'USER_LOGIN',
      uid,
    });
  });
  
  test('userLogout should return correct action object', () => {
    const action = userLogout();
    
    expect(action).toEqual({
      type: 'USER_LOGOUT',
    });
  });
});
