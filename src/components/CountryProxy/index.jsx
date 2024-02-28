import styles from "./style.module.scss";
import Title from "../../ui/Title";
import { useTranslation } from "react-i18next";

export default function CountryProxy() {
  const { t } = useTranslation();

  return (
    <div className={styles.country_proxy}>
      <Title>{t("countryProxyTitle")}</Title>
    </div>
  );
}
