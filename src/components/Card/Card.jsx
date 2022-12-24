import { CardHeader } from "../CardHeader/CardHeader";
import { Info } from "../Info/Info";

import css from "./Card.module.css";

export function Card() {
  return (
    <li className={css.galleryItem}>
      <CardHeader />
      <Info />
    </li>
  );
}
