// import user from './user';
import css from './Profile.module.css';

const Profile = ({user}) => {
  return (
    <section className={css.userProfileBackground}>
      <div className={css.userProfileCard}>
        <img src={user.avatar} alt={user.username} className={css.avatar} />
        <div className={css.descProfWrapper}>
          <p className={css.userName}>{user.username}</p>
          <p className={css.userTag}>@{user.tag}</p>
          <p className={css.userLocation}>{user.location}</p>
        </div>

        <ul className={css.userStats}>
          <li className={css.userItem}>
            <span className={css.statsLabel}>Followers</span>
            <span className={css.userQuantity}>{user.stats.followers}</span>
          </li>
          <li className={css.userItem}>
            <span className={css.statsLabel}>Views</span>
            <span className={css.userQuantity}>{user.stats.views}</span>
          </li>
          <li className={css.userItem}>
            <span className={css.statsLabel}>Likes</span>
            <span className={css.userQuantity}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
