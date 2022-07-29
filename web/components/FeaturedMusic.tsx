import { withUrqlClient } from "next-urql";
import { useReadArticlesQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import FeaturedHeader from "./FeaturedHeader";
import FeaturedHorizontal from "./FeaturedHorizontal";

const FeaturedMusic = () => {
  const [{ data, fetching }] = useReadArticlesQuery({
    variables: {
      genre: "Music",
      take: 3,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center mt-48">
      <div className="2xl:w-[1550px] xl:w-[1050px] lg:w-[800px]">
        <FeaturedHeader text="Music" />
        {!fetching && data
          ? data.readArticles.map((v) => (
              <FeaturedHorizontal key={v.id} data={v} />
            ))
          : null}
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(FeaturedMusic);
