import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";

export default function Button({ className, children, variant }) {
  const styleClassName = setClassName(className);
  const styleVariant = setClassName(variant);

  return (
    <button className={styles.btn + styleClassName + styleVariant}>
      {children}
    </button>
  );
}
