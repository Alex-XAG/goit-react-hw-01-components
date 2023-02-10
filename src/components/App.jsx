import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import FriendList from './Friends/FriendList';
import TransactionList from './Transactions/TransactionList';
import dataCard from '../user';
import friends from '../friends';
export default function () {
  return (
    <div>
      <Profile
        key={dataCard.username}
        url={dataCard.avatar}
        alt={dataCard.username}
        userName={dataCard.username}
        tag={dataCard.tag}
        location={dataCard.location}
        followers={dataCard.stats.followers}
        views={dataCard.stats.views}
        likes={dataCard.stats.likes}
      />

      <Statistics />

      <FriendList />

      <TransactionList />
    </div>
  );
}
