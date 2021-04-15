import React, {useContext, useEffect, useState} from 'react';
import {useAuth} from './AuthProvider';

const ListingContext = React.createContext(null);

const ListingProvider = ({children}) => {
  const {user} = useAuth();
  const [db, setDb] = useState(null);

  useEffect(() => {
    if (user !== null) {
      const realmService = user.mongoClient('mongodb-atlas');
      setDb(realmService.db('sample_airbnb'));
    }
  }, [user]);

  return (
    <ListingContext.Provider
      value={{
        db,
      }}>
      {children}
    </ListingContext.Provider>
  );
};

export const useListings = () => {
  const listContext = useContext(ListingContext);
  if (listContext == null) {
    throw new Error('useListings() called outside of a Provider?');
  }
  return listContext;
};

export default ListingProvider;
