import styles from "./style.module.scss";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";

export default function Home() {
  const { t } = useTranslation();

  console.log(t("outstandingTitle"));
  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.outstanding}>
          <div className={styles.outstanding__left}>
            <div className={styles.outstanding__title}>
              {t("outstandingTitle")}
            </div>
            <div className={styles.outstanding__description}>
              {t("outstandingDescription")}
            </div>
            <Button className={styles.outstanding__btn}>
              {t("outstandingButton")}
            </Button>
          </div>
          <div className={styles.outstanding__right}>
            <img
              className={styles.outstanding__img}
              src="/images/Art 1 1.png"
              alt=""
              width={760}
            />
          </div>
        </div>
      </div>
    </>
  );
}
