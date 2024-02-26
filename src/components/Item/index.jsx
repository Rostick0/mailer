import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";

export default function Item({
  className,
  svg,
  title,
  description,
  action,
  variant,
}) {
  const styleClassName = setClassName(className);
  const styleVariant = setClassName(styles[variant]);

  return (
    <li
      className={styles.item + styleClassName + styleVariant + " style-block"}
    >
      {svg}
      <div className={styles.item__title}>{title}</div>
      <div
        className={styles.item__description}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      {action && <div className={styles.item__action}>{action}</div>}
    </li>
  );
}
