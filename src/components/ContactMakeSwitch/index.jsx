import { useTranslation } from "react-i18next";
import styles from "./style.module.scss";
import Title from "../../ui/Title";
import Item from "../Item";
import { useMemo, useState } from "react";
import MyLink from "../../ui/MyLink";

export default function ContactMakeSwitch({
  index,
  title,
  description,
  items = [],
}) {
  const { t } = useTranslation();
  // const items = [
  //   {
  //     title: "",
  //   }, contactMakeItemItemLink
  // ];

  const [active, setActive] = useState(false);

  const activeSwitchClass = useMemo(() => {
    if (active) {
      return " " + styles.active;
    }

    return "";
  }, [active]);

  const itemsMemo = useMemo(() => items, [items]);

  return (
    <li className={styles.switch + activeSwitchClass}>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={styles.switch__title}
      >
        <span>{title}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 9.5L12 14.5L7 9.5"
            stroke="var(--third-color)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className={styles.switch__content}>
        {description && (
          <div className={styles.switch__description}>{description}</div>
        )}
        <ul className={styles.switch__list}>
          {items?.length &&
            itemsMemo?.map((item, i) => (
              <Item
                className={styles.switch__item}
                key={i}
                variant="red"
                action={
                  <MyLink to={item?.link} withArrow={true}>
                    {t("contactMakeItemItemLink" + index + (i + 1))}
                  </MyLink>
                }
                svg={item?.svg}
                title={t("contactMakeItemItemTitle" + index + (i + 1))}
                description={t(
                  "contactMakeItemItemDescription" + index + (i + 1)
                )}
              />
            ))}
        </ul>
      </div>
      {/* {items.map((item, index) => (
          <Item
            className={styles.contact_help__item}
            key={index}
            variant="red"
            svg={item.svg}
            title={t("contactHelpItemTitle" + (index + 1))}
            description={t("contactHelpItemDescription" + (index + 1))}
          />
          // contactHelpItemButton
        ))} */}
    </li>
  );
}
