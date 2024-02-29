import { useTranslation } from "react-i18next";
import Title from "../../ui/Title";
import styles from "./style.module.scss";
import ServersPercent from "../ServersPercent";

export default function Servers({ servers = [] }) {
  const { t } = useTranslation();

  return (
    <div className={styles.servers}>
      <Title>{t("serversTitle")}</Title>
      <div className={styles.servers__table}>
        <div className={styles.servers__table_item + " " + styles._name}>
          <div className={styles.servers__table_item_ip}>
            {t("serversTableIp")}
          </div>
          <div>{t("serversTableStatus")}</div>
        </div>
        {servers?.length &&
          servers?.map((item) => (
            <div className={styles.servers__table_item}>
              <div className={styles.servers__table_item_ip}>{item?.ip}</div>
              <ServersPercent percent={item?.percent} color={item?.color} />
            </div>
          ))}
      </div>
    </div>
  );
}
