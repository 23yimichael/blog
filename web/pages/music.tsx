import { withUrqlClient } from "next-urql";
import FeaturedVertical from "../components/FeaturedVertical";
import Layout from "../components/Layout";
import { useReadArticlesQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Music = () => {
  const [{ data, fetching }] = useReadArticlesQuery({
    variables: {
      genre: "Music",
    },
  });

  const fake_data = [
    {
      id: 0,
      img: "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Beatles-GettyImages-1183628511-1000x600.jpg",
      date: "JULY 18TH, 2022",
      title: "The History of the Beatles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
  ];

  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <div className="text-center font-poppins font-semibold 2xl:text-5xl xl:text-3xl lg:text-xl mt-12">
            Music
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

export default withUrqlClient(createUrqlClient, { ssr: true })(Music);
