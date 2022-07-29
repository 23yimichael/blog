import Layout from "../components/Layout";

const Page404 = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="font-poppins font-bold text-9xl">404</div>
        <div className="font-poppins font-semibold text-xl">
          This page does not exist!
        </div>
      </div>
    </Layout>
  );
};

export default Page404;
