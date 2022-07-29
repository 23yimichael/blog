import Divider from "@mui/material/Divider";
import { withUrqlClient } from "next-urql";
import { useReadFeaturedArticlesQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import FeaturedBig from "./FeaturedBig";
import FeaturedSmall from "./FeaturedSmall";

const Featured = () => {
  const [{ data, fetching }] = useReadFeaturedArticlesQuery();

  return (
    <div className="flex items-center justify-center 2xl:space-x-16 lg:space-x-12 xl:space-x-14 2xl:mt-24 lg:mt-8 xl:mt-12">
      {/* {!fetching && data && (
        <>
          <FeaturedBig data={data?.readFeaturedArticles[0].article} />
          <Divider orientation="vertical" variant="middle" flexItem />
          <div>
            <FeaturedSmall data={data?.readFeaturedArticles[1].article} />
            <FeaturedSmall
              margin
              data={data?.readFeaturedArticles[2].article}
            />
          </div>
        </>
      )} */}
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(Featured);
