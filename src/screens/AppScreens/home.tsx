import * as React from 'react';
import {ReactElement, useEffect, useState} from 'react';
import {useListings} from '../../providers/ListingProvider';
import {ListItem} from '../../components';
import {Text, View} from 'react-native';
import {useAuth} from '../../providers/AuthProvider';

export default function Home() {
  const [listings, setListings] = useState([]);
  const {db} = useListings();
  const {user} = useAuth();
  console.log(listings.map(item => item.address));

  useEffect(() => {
    async function wrapListingQuery() {
      if (user && db) {
        const airBnBList = await db.collection('listingsAndReviews').find();
        setListings(airBnBList);
      }
    }
    wrapListingQuery();
  }, [user, db]);

  return (
    <View>
      {listings.map(item => {
        <ListItem address={item.address} />;
      })}
    </View>
  );
}
