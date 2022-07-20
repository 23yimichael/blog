import Featured from "../components/Featured";
import FeaturedFilmTV from "../components/FeaturedFilmTV";
import FeaturedMusic from "../components/FeaturedMusic";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Landing = () => {
  return (
    <Layout>
      <Featured />
      <FeaturedMusic />
      <FeaturedFilmTV />
      <Footer />
    </Layout>
  );
};

export default Landing;
