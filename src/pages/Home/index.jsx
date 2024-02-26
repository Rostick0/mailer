import styles from "./style.module.scss";
import MainOutstanding from "../../components/MainOutstanding";
import MainDelivery from "../../components/MainDelivery";
import MainReputation from "../../components/MainReputation";
import MainSending from "../../components/MainSending";
import MainUtilize from "../../components/MainUtilize";
import MainQuick from "../../components/MainQuick";
import ClientLayout from "../../layout/ClientLayout";

export default function Home() {

  return (
    <ClientLayout>
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
    </ClientLayout>
  );
}
