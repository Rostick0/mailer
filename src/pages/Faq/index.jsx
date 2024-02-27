import styles from "./style.module.scss";
import FaqHelp from "../../components/FaqHelp";
import FaqList from "../../components/FaqList";
import ClientLayout from "../../layout/ClientLayout";

export default function Faq() {
  return (
    <ClientLayout>
      <div className={styles.faq}>
        <div className="container">
          <div className={styles.faq__content}>
            <FaqHelp />
            <FaqList />
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
