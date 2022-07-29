import { withUrqlClient } from "next-urql";
import { useReadArticlesQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import FeaturedHeader from "./FeaturedHeader";
import FeaturedVertical from "./FeaturedVertical";

const FeaturedFilmTV = () => {
  const [{ data, fetching }] = useReadArticlesQuery({
    variables: {
      genre: "Film/TV",
      take: 4,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center mt-48">
      <div className="2xl:w-[1550px] xl:w-[1050px] lg:w-[800px]">
        <FeaturedHeader text="Film/TV" />
        <div className="flex mt-24 2xl:space-x-4 xl:space-x-2 lg:space-x-1">
          {!fetching && data
            ? data.readArticles.map((v) => <FeaturedVertical data={v} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(FeaturedFilmTV);
