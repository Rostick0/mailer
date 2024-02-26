import styles from "./style.module.scss";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import MainOutstanding from "../../components/MainOutstanding";
import MainDelivery from "../../components/MainDelivery";
import MainReputation from "../../components/MainReputation";
import MainSending from "../../components/MainSending";
import MainUtilize from "../../components/MainUtilize";
import MainQuick from "../../components/MainQuick";
import Footer from "../../components/Footer";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <MainOutstanding />
          <MainDelivery />
          <MainReputation />
        </div>
        <MainSending />
        <div className="container">
          <MainUtilize />
          <MainQuick />
        </div>
      </main>
      <Footer />
    </>
  );
}
