import React, { useState } from "react";
import css from "./Info.module.css";
import { groupNumbers } from "../../utils/groupNumbers";

export function Info({ tweets, followers }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={css.infoSection}>
      <ul className={css.infoList}>
        <li className={css.infoItem}>{groupNumbers(tweets)} TWEETS</li>
        <li className={css.infoItem}>
          {groupNumbers(followers + clicked)} FOLLOWERS
        </li>
      </ul>
      <button
        className={`${css.button} ${clicked ? css.clicked : null}`}
        onClick={setClicked(!clicked)}
      >
        {clicked ? "Following" : "Follow"}
      </button>
    </div>
  );
}
