import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useReadArticleQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const View = () => {
  const router = useRouter();
  const [{ data, fetching }] = useReadArticleQuery({
    variables: {
      id: parseInt(router.query.id as string),
    },
  });

  return (
    <Layout>
      {!fetching && data && (
        <div className="flex justify-center mt-12">
          <div className="w-[800px]">
            <div className="flex">
              <div className="font-poppins font-semibold text-base text-gray">
                {data.readArticle.genre}
              </div>
              <div className="font-poppins font-semibold text-base text-gray ml-auto">
                {data.readArticle.date}
              </div>
            </div>

            <div className="font-poppins font-semibold 2xl:text-3xl xl:text-2xl mt-2">
              {data.readArticle.title}
            </div>
            <img
              src={data.readArticle.img}
              className="w-[800px] aspect-[5/3] rounded-xl mt-10"
            />
            <div
              className="font-poppins mt-14 whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: data.readArticle.text }}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(View);
