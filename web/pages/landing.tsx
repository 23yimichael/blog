import Featured from "../components/Featured";
import FeaturedFilmTV from "../components/FeaturedFilmTV";
import FeaturedMusic from "../components/FeaturedMusic";
import Layout from "../components/Layout";

const Landing = () => {
  return (
    <Layout>
      <Featured />
      <FeaturedMusic />
      <FeaturedFilmTV />
    </Layout>
  );
};

export default Landing;
