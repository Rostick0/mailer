import styles from "./style.module.scss";

export default function Item({ svg, title, description }) {
  return (
    <li className={styles.item + " style-block"}>
      {svg}
      <div className={styles.item__title}>{title}</div>
      <div className={styles.item__description}>{description}</div>
    </li>
  );
}
