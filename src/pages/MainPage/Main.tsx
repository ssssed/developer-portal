import Catalog from "../../components/Catalog/Catalog";
import FrontendWay from "../../components/FrontendWay/FrontendWay";
import RecomendedSection from "../../components/RecomendedSection/RecomendedSection";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <RecomendedSection />
      <FrontendWay />
      <Catalog />
    </main>
  );
};

export default Main;
