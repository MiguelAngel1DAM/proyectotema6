import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import Headsetslist from "../../components/headsetsList/headsetsList";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <Headsetslist></Headsetslist>
      <Footer />
    </>
  );
}

export default Home;