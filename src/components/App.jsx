import { Profile } from '../components/Profile/Profile';
import { Statistics } from '../components/Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionList } from './Transactions/TransactionList';
import dataUser from '../user';

export const App = () => {
  return (
    <div>
      <Profile
        key={dataUser.username}
        url={dataUser.avatar}
        userName={dataUser.username}
        tag={dataUser.tag}
        location={dataUser.location}
        followers={dataUser.stats.followers}
        views={dataUser.stats.views}
        likes={dataUser.stats.likes}
      />

      <Statistics />

      <FriendList />

      <TransactionList />
    </div>
  );
};
