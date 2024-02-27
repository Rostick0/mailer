import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";

export default function TitleMiddle({ className, children, variant, ...other }) {
  const styleClassName = setClassName(className);
  const styleVariant = setClassName(styles[variant]);

  return (
    <h3 className={styles.title + styleClassName + styleVariant} {...other}>
      {children}
    </h3>
  );
}
