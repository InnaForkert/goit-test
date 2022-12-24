import { CardHeader } from "../CardHeader/CardHeader";
import { Info } from "../Info/Info";

import css from "./Card.module.css";

export function Card({ userInfo: { user, tweets, followers, avatar } }) {
  return (
    <li className={css.galleryItem}>
      <CardHeader avatar={avatar} alt={user} />
      <Info tweets={tweets} followers={followers} />
    </li>
  );
}
