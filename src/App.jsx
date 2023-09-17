import Statistics from 'components/Statistics/Statistics';
import Profile from './components/Profile/Profile';
import FriendsList from 'components/FriendsList/FriendsList';
import TransactionsHistory from 'components/TransactionsHistory/TransactionsHistory';

import user from './components/Profile/user';
import data from './components/Statistics/data';
import friends from './components/FriendsList/friends';

import transactions from './components/TransactionsHistory/transactions';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendsList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </div>
  );
};
