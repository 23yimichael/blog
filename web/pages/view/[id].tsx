import Layout from "../../components/Layout";

const View = () => {
  const data = {
    img: "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Beatles-GettyImages-1183628511-1000x600.jpg",
    genre: "MUSIC",
    date: "JULY 18TH, 2022",
    title: "The History of the Beatles",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-[1000px]">
          <div className="flex">
            <div className="font-poppins font-semibold text-lg text-gray">
              {data.genre}
            </div>
            <div className="font-poppins font-semibold text-base text-gray ml-auto">
              {data.date}
            </div>
          </div>

          <div className="font-poppins font-semibold 2xl:text-2xl xl:text-lg mt-2">
            {data.title}
          </div>
          <img
            src={data.img}
            className="w-[1000px] h-[600px] rounded-xl mt-4"
          />
          <div className="font-poppins mt-8">{data.text}</div>
        </div>
      </div>
    </Layout>
  );
};

export default View;
