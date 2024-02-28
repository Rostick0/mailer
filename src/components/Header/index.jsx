import styles from "./style.module.scss";
import LogoSvg from "../../app/svg/LogoSvg";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";
import LangSvg from "../../app/svg/LangSvg";
import ThemeSvg from "../../app/svg/ThemeSvg";
import { useTheme } from "./../../app/context/ThemeContext";
import HeaderNav from "../HeaderNav";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../app/router";

export default function Header() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <Link to={ROUTE_NAMES.main}>
            <LogoSvg className={styles.header__logo} />
          </Link>
          <HeaderNav />
          <div className={styles.header__actions}>
            <div className={styles.header__action}>
              <LangSvg />
              {t("lang")}
            </div>
            <div onClick={toggleTheme} className={styles.header__action}>
              <ThemeSvg />
              {theme === "light" ? t("theme_dark") : t("theme_light")}
            </div>
            <div className={styles.header__buttons}>
              <Link to={ROUTE_NAMES.register}>
                <Button className={styles.header__button} variant="outlined">
                  {t("logIn")}
                </Button>
              </Link>
              <Link to={ROUTE_NAMES.register}>
                <Button className={styles.header__button}>{t("signUp")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
