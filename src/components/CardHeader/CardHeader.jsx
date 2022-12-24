import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as HeaderPicture } from "../../img/header.svg";
import heart from "../../img/heart.png";
import heartBot from "../../img/heartBot.png";
import dots from "../../img/dots.png";
import boy from "../../img/boy.png";
import css from "./CardHeader.module.css";

export function CardHeader() {
  return (
    <div className={css.header}>
      <Logo className={css.logo} />
      <HeaderPicture className={css.headerImg} />
      <img src={heart} alt="heart icon" className={css.heartIcon} />
      <img src={heartBot} alt="heart icon" className={css.heartBotIcon} />
      <img src={dots} alt="dots icon" className={css.dotsIcon} />
      <div className={css.separator}></div>
      <img src={boy} alt="a boy with red hair" className={css.profilePicture} />
    </div>
  );
}
