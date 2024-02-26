import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";

export default function HeaderNavItem({ title, items, link = null }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  const activeClass = useMemo(() => (active ? " " + styles.item_active : ""));

  return (
    <div
      className={styles.item + activeClass}
      onBlur={() => setActive(false)}
      tabIndex={1}
    >
      {link ? (
        <Link className={styles.item__title} to={link}>
          {t(title)}
        </Link>
      ) : (
        <div
          className={styles.item__title}
          onClick={() => setActive((prev) => !prev)}
        >
          <span>{t(title)}</span>
          <svg
            className={styles.item__arrow}
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            stroke="var(--third-color)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8158 7.91634L10.6491 12.083L6.48242 7.91634"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      {items?.length && active && (
        <ul className={styles.item__ul}>
          {items?.map((item, index) => (
            <li key={index} className={styles.item__li}>
              <Link to={item?.link}>{t(item?.title)}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
