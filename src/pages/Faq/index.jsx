import styles from "./style.module.scss";
import ClientLayout from "../../layout/ClientLayout";

export default function Faq() {
  return (
    <ClientLayout>
      <div className={styles.faq}>
        <img className={styles.faq__img} src="/images/Group 29.svg" />
        <img className={styles.faq__img} src="/images/Group 28.svg" />
        <div className="container">
          <div className={styles.faq__content}>
            
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
