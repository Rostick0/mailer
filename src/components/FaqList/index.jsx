import { useTranslation } from "react-i18next";
import Title from "../../ui/Title";
import styles from "./style.module.scss";
import Spoiler from "../Spoiler";
import P from "../../ui/P";
import TitleSmall from "../../ui/TitleSmall";
import Ul from "../../ui/Ul";

export default function FaqList() {
  const { t } = useTranslation();

  const list = [
    {
      title: t("faqListItemBigTitle1"),
      content: (
        <div className={styles.faq_list__content}>
          <P>{t("faqListItemContent11")}</P>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle12")}</TitleSmall>
            <P>{t("faqListItemContent12")}</P>
            <P>{t("faqListItemContent13")}</P>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle13")}</TitleSmall>
            <P>{t("faqListItemContent14")}</P>
            <Ul>
              <li>{t("faqListItemLi11")}</li>
              <li>{t("faqListItemLi12")}</li>
              <li>{t("faqListItemLi13")}</li>
            </Ul>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle14")}</TitleSmall>
            <P>{t("faqListItemContent15")}</P>
            <P>{t("faqListItemContent16")}</P>
            <P>{t("faqListItemContent17")}</P>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle15")}</TitleSmall>
            <P>{t("faqListItemContent18")}</P>
            <P>{t("faqListItemContent19")}</P>
            <P>{t("faqListItemContent110")}</P>
            <P>{t("faqListItemContent111")}</P>
            <P>{t("faqListItemContent112")}</P>
            <P>{t("faqListItemContent113")}</P>
          </div>
        </div>
      ),
    },
    {
      title: t("faqListItemBigTitle2"),
      content: (
        <div className={styles.faq_list__content}>
          <div className={styles.faq_list__content_item}>
            <P>{t("faqListItemContent21")}</P>
            <P>{t("faqListItemContent22")}</P>
            <P>{t("faqListItemContent23")}</P>
            <P>{t("faqListItemContent24")}</P>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle22")}</TitleSmall>
            <P>{t("faqListItemContent25")}</P>
            <Ul>
              <li>{t("faqListItemLi21")}</li>
              <li>{t("faqListItemLi22")}</li>
              <li>{t("faqListItemLi23")}</li>
            </Ul>
            <P>
              {t("faqListItemContent26")}
              <br />
              {t("faqListItemContent27")}
            </P>
            <P>{t("faqListItemContent28")}</P>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle23")}</TitleSmall>
            <P>{t("faqListItemContent29")}</P>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle24")}</TitleSmall>
            <P>{t("faqListItemContent210")}</P>
            <Ul>
              <li>{t("faqListItemLi24")}</li>
              <li>{t("faqListItemLi25")}</li>
              <li>{t("faqListItemLi26")}</li>
              <li>{t("faqListItemLi27")}</li>
              <li>{t("faqListItemLi28")}</li>
              <li>{t("faqListItemLi29")}</li>
              <li>{t("faqListItemLi210")}</li>
              <li>{t("faqListItemLi211")}</li>
              <li>{t("faqListItemLi212")}</li>
            </Ul>
            <P>{t("faqListItemContent211")}</P>
          </div>
        </div>
      ),
    },
    {
      title: t("faqListItemBigTitle3"),
      content: (
        <div className={styles.faq_list__content}>
          <div className={styles.faq_list__content_item}>
            <P>{t("faqListItemContent31")}</P>
            <P>{t("faqListItemContent32")}</P>
            <P>{t("faqListItemContent33")}</P>
            <P>{t("faqListItemContent34")}</P>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle32")}</TitleSmall>
            <Ul>
              <li>{t("faqListItemLi31")}</li>
              <li>{t("faqListItemLi32")}</li>
              <li>{t("faqListItemLi33")}</li>
              <li>{t("faqListItemLi34")}</li>
              <li>{t("faqListItemLi35")}</li>
              <li>{t("faqListItemLi36")}</li>
              <li>{t("faqListItemLi37")}</li>
            </Ul>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle33")}</TitleSmall>
            <P>{t("faqListItemContent35")}</P>
          </div>
        </div>
      ),
    },
    {
      title: t("faqListItemBigTitle4"),
      content: (
        <div className={styles.faq_list__content}>
          <div className={styles.faq_list__content_item}>
            <P>{t("faqListItemContent41")}</P>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle42")}</TitleSmall>
            <Ul>
              <li>
                <span
                  dangerouslySetInnerHTML={{ __html: t("faqListItemLi41") }}
                ></span>
              </li>
              <li>{t("faqListItemLi42")}</li>
              <li>{t("faqListItemLi43")}</li>
            </Ul>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle43")}</TitleSmall>
            <Ul>
              <li>
                <span
                  dangerouslySetInnerHTML={{ __html: t("faqListItemLi44") }}
                ></span>
              </li>
              <li>{t("faqListItemLi45")}</li>
              <li>{t("faqListItemLi46")}</li>
              <li>{t("faqListItemLi47")}</li>
            </Ul>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle44")}</TitleSmall>
            <Ul>
              <li>
                <span
                  dangerouslySetInnerHTML={{ __html: t("faqListItemLi48") }}
                ></span>
              </li>
              <li>{t("faqListItemLi49")}</li>
              <li>{t("faqListItemLi410")}</li>
              <li>{t("faqListItemLi411")}</li>
            </Ul>
          </div>
          <P>{t("faqListItemContent42")}</P>
        </div>
      ),
    },
    {
      title: t("faqListItemBigTitle5"),
      content: (
        <div className={styles.faq_list__content}>
          <div className={styles.faq_list__content_item}>
            <P>{t("faqListItemContent51")}</P>
            <P>{t("faqListItemContent52")}</P>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle52")}</TitleSmall>
            <P>{t("faqListItemContent53")}</P>
            <Ul>
              <li>{t("faqListItemLi51")}</li>
              <li>{t("faqListItemLi52")}</li>
              <li>{t("faqListItemLi53")}</li>
              <li>{t("faqListItemLi54")}</li>
              <li>{t("faqListItemLi55")}</li>
              <li>{t("faqListItemLi56")}</li>
              <li>{t("faqListItemLi57")}</li>
              <li>{t("faqListItemLi58")}</li>
            </Ul>
          </div>
          <P>{t("faqListItemContent54")}</P>
        </div>
      ),
    },
    {
      title: t("faqListItemBigTitle6"),
      content: (
        <div className={styles.faq_list__content}>
          <div className={styles.faq_list__content_item}>
            <P>{t("faqListItemContent61")}</P>
          </div>
          <div className={styles.faq_list__content_item}>
            <TitleSmall>{t("faqListItemTitle62")}</TitleSmall>
            <P>{t("faqListItemContent62")}</P>
            <Ul>
              <li>
                <span>
                  <span>{t("faqListItemLi61")}</span>
                  <Ul>
                    <li>{t("faqListItemLi62")}</li>
                    <li>{t("faqListItemLi63")}</li>
                    <li>{t("faqListItemLi64")}</li>
                    <li>{t("faqListItemLi65")}</li>
                  </Ul>
                </span>
              </li>
              <br />
              <li>{t("faqListItemLi66")}</li>
              <br />
              <li>
                <span>
                  <span>{t("faqListItemLi67")}</span>
                  <Ul>
                    <li>{t("faqListItemLi68")}</li>
                  </Ul>
                </span>
              </li>
              <br />
              <li>{t("faqListItemLi69")}</li>
            </Ul>
            <div className={styles.faq_list__content_item}>
              <TitleSmall>{t("faqListItemTitle63")}</TitleSmall>
              <P>{t("faqListItemContent63")}</P>
              <Ul>
                <li>{t("faqListItemLi610")}</li>
                <li>{t("faqListItemLi611")}</li>
                <li>{t("faqListItemLi612")}</li>
                <li>{t("faqListItemLi613")}</li>
                <li>{t("faqListItemLi614")}</li>
                <li>{t("faqListItemLi615")}</li>
                <li>{t("faqListItemLi616")}</li>
                <li>{t("faqListItemLi617")}</li>
              </Ul>
            </div>
            <P>{t("faqListItemContent64")}</P>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.faq_list}>
      <Title>{t("faqListTitle")}</Title>
      <div>{t("faqListSubtitle")}</div>
      <ul className={styles.faq_list__ul}>
        {list.map((item, index) => (
          <li className={styles.faq_list__li}>
            <Spoiler key={index} title={item.title} content={item.content} />
          </li>
        ))}
      </ul>
    </div>
  );
}
