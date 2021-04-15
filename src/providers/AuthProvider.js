import React, {useContext, useState, useEffect, useRef} from 'react';
import Realm from 'realm';
import {getRealmApp} from '../../getRealmApp';

const app = getRealmApp();

const AuthContext = React.createContext(null);

const AuthProvider = ({children}) => {
  console.log('In auth provider');
  console.log(app.currentUser);
  const [user, setUser] = useState(app.currentUser);
  const realmRef = useRef(null);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    const myListingsAndReviews = {
      name: 'ListingsAndReviews',
      partition: `project=${user.id}`,
    };
    setProjectData([myListingsAndReviews]);

    const config = {
      sync: {
        user,
        partitionValue: `user=${user.id}`,
      },
    };
    console.log(user.id);

    Realm.open(config).then(userRealm => {
      realmRef.current = userRealm;
      const users = userRealm.objects('User');

      users.addListener(() => {
        if (users.length === 0) {
          setProjectData([myListingsAndReviews]);
        } else {
          const {memberOf} = users[0];
          setProjectData([...memberOf]);
        }
      });
    });

    return () => {
      const userRealm = realmRef.current;
      if (userRealm) {
        userRealm.close();
        realmRef.current = null;
        setProjectData([]);
      }
    };
  }, [user]);

  const signIn = async (email, password) => {
    const creds = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(creds);
    setUser(newUser);
  };

  const signUp = async (email, password) => {
    await app.emailPasswordAuth.registerUser(email, password);
  };

  const signOut = () => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        user,
        projectData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth == null) {
    throw new Error('useAuth() called outside of a AuthProvider?');
  }
  return auth;
};

export {AuthProvider, useAuth};
