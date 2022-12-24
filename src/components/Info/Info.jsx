import css from "./Info.module.css";

export function Info() {
  return (
    <div className={css.infoSection}>
      <ul className={css.infoList}>
        <li className={css.infoItem}>777 TWEETS</li>
        <li className={css.infoItem}>100.500 FOLLOWERS</li>
      </ul>
      <button className={css.button}>Follow</button>
    </div>
  );
}
