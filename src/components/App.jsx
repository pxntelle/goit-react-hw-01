import userData from "../data/userData.json";
import Profile from "./Profile/Profile";
import friends from "../data/friends.json";
import FriendList from "./FriendList/FriendList";
import transactions from "../data/transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        image={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
