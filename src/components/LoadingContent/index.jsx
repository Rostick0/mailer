import Loading from "../Loading";
import styles from "./style.module.scss";

export default function LoadingContent() {
  return (
    <div className={styles.LoadingContent}>
      <Loading />
    </div>
  );
}
