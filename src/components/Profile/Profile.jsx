import style from "./Profile.module.css";

const Profile = ({ image, name, tag, location, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={style.profileCard}>
      <div className={style.profileInfo}>
        <img src={image} alt="User avatar" />
        <p className={style.profileName}>{name}</p>
        <p className={style.profileTag}>@{tag}</p>
        <p className={style.profileLocation}>{location}</p>
      </div>
      <ul className={style.statsList}>
        <li className={style.statsItem}>
          <span className={style.statsTitle}>Followers</span>
          <span className={style.statsValue}>{followers}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.statsTitle}>Views</span>
          <span className={style.statsValue}>{views}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.statsTitle}>Likes</span>
          <span className={style.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
