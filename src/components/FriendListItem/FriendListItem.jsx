import style from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.friendItem}>
      <img src={avatar} alt="Avatar" width="100" />
      <p className={style.friendName}>{name}</p>
      <p
        className={`${style.status} ${isOnline ? style.online : style.offline}`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
