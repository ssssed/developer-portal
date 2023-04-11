import RecomendedTheme from "../../components/RecomendedTheme/RecomendedTheme";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <h2 className="main__title">Рекомендуемые темы</h2>
      <RecomendedTheme />
    </main>
  );
};

export default Main;
