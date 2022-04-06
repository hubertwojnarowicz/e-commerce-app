import { db } from '../lib/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';

export const getUserName = async (user) => {
  const result = query(collection(db, 'users'), where('uid', '==', user.uid));
  const docs = await getDocs(result);

  const userName = await docs.docs[0]._document.data.value.mapValue.fields
    .username;
  const arrName = Object.values(userName);
  const nameToString = arrName.toString();
  return nameToString;
};
