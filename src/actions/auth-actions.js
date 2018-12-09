import { firebase, googleAuthProvider } from '../firebase/firebase';

const userLogin = (uid) => ({
  type: 'USER_LOGIN',
  uid,
});

const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

const userLogout = () => ({
  type: 'USER_LOGOUT',
});

const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export { userLogin, startLogin, userLogout, startLogout };

