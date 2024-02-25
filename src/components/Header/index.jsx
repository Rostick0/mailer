import styles from "./style.module.scss";
import LogoSvg from "../../app/svg/LogoSvg";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";
import LangSvg from "../../app/svg/LangSvg";
import { useTheme } from "./../../app/context/ThemeContext";

export default function Header() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <LogoSvg className={styles.header__logo} />
          <div className={styles.header__actions}>
            <div className={styles.header__action}>
              <LangSvg />
              {t("lang")}
            </div>
            <div onClick={toggleTheme} className={styles.header__action}>
              <LangSvg />
              {theme === "light" ? t("theme_dark") : t("theme_dark")}
            </div>
            <div className={styles.header__buttons}>
              <Button className={styles.header__button}>{t("logIn")}</Button>
              <Button className={styles.header__button}>{t("signUp")}</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
