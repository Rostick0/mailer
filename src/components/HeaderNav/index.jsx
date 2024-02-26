import { ROUTE_NAMES } from "../../app/router";
import HeaderNavItem from "../HeaderNavItem";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

export default function HeaderNav() {
  const { t } = useTranslation();

  const menu = [
    {
      title: "headerNavProducts",
      items: [
        {
          title: "headerNavMailer",
          link: "#",
        },
        {
          title: "headerNavPackages",
          link: "#",
        },
      ],
    },
    {
      title: "headerNavSolution",
      items: [
        {
          title: "headerNavAdvancedTechnology",
          link: "#",
        },
        {
          title: "headerNavInbuiltTools",
          link: "#",
        },
        {
          title: "headerNavAdvancedMailing",
          link: "#",
        },
      ],
    },
    {
      title: "headerNavBusiness",
      link: ROUTE_NAMES.main,
    },
    {
      title: "headerNavPricing",
      items: [
        {
          title: "headerNavBasic",
          link: "#",
        },
        {
          title: "headerNavPremium",
          link: "#",
        },
        {
          title: "headerNavDeluxe",
          link: "#",
        },
      ],
    },
    {
      title: "headerNavHelp",
      items: [
        {
          title: "headerNavTicketSystem",
          link: "#",
        },
        {
          title: "headerNavTelegramSupport",
          link: "#",
        },
        {
          title: "headerNavLiveChatSupport",
          link: "#",
        },
      ],
    },
  ];

  return (
    <nav className={styles.nav}>
      {menu.map((item) => (
        <HeaderNavItem key={item.title} {...item} />
      ))}
    </nav>
  );
}
