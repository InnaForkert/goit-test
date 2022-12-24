import css from "./Info.module.css";

export function Info({ tweets, followers }) {
  return (
    <div className={css.infoSection}>
      <ul className={css.infoList}>
        <li className={css.infoItem}>
          {tweets.toLocaleString("en", { useGrouping: true })} TWEETS
        </li>
        <li className={css.infoItem}>
          {followers.toLocaleString("en", { useGrouping: true })} FOLLOWERS
        </li>
      </ul>
      <button className={css.button}>Follow</button>
    </div>
  );
}
