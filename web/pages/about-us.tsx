import { withUrqlClient } from "next-urql";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import { useReadAboutUsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const AboutUs = () => {
  const [{ data, fetching }] = useReadAboutUsQuery();

  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <div className="text-center font-poppins font-semibold 2xl:text-5xl xl:text-3xl lg:text-xl mt-12">
            About Us
          </div>
          <div className="flex space-x-6 mt-12">
            <>
              {!fetching && data
                ? data?.readAboutUs.map((v) => <Profile data={v} />)
                : null}
            </>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(AboutUs);
