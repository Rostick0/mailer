import styles from "./style.module.scss";
import ClientLayout from "../../layout/ClientLayout";
import Title from "../../ui/Title";
import { useTranslation } from "react-i18next";

export default function Page404() {
  const { t } = useTranslation();

  return (
    <ClientLayout>
      <div className="container">
        <div className={styles.Page404}>
          <img
            className={styles.Page404__img}
            src="/images/404.png"
            alt=""
          />
          <Title>{t("Page404Title")}</Title>
        </div>
      </div>
    </ClientLayout>
  );
}
