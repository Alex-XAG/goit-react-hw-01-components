import { Profile } from '../components/Profile/Profile';
import { Statistics } from '../components/Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionList } from './Transactions/TransactionList';
import dataUser from '../data/user.json';
import dataStatistics from '../data/data.json';
import dataFriends from '../data/friends.json';
import dataTransactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        key={dataUser.username}
        url={dataUser.avatar}
        userName={dataUser.username}
        tag={dataUser.tag}
        location={dataUser.location}
        stats={dataUser.stats}
      />

      <Statistics title="UPLOAD STATS" dataStats={dataStatistics} />

      <FriendList friends={dataFriends} />

      <TransactionList transactions={dataTransactions} />
    </div>
  );
};
