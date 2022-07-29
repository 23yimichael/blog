import { withUrqlClient } from "next-urql";
import FeaturedVertical from "../components/FeaturedVertical";
import Layout from "../components/Layout";
import { useReadArticlesQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const FilmTV = () => {
  const [{ data, fetching }] = useReadArticlesQuery({
    variables: {
      genre: "Film/TV",
    },
  });

  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <div className="text-center font-poppins font-semibold 2xl:text-5xl xl:text-3xl lg:text-xl mt-12">
            Film/TV
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4">
            {!fetching && data
              ? data.readArticles.map((v) => <FeaturedVertical data={v} />)
              : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(FilmTV);
