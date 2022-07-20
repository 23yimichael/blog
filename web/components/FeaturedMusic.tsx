import FeaturedHeader from "./FeaturedHeader";
import FeaturedHorizontal from "./FeaturedHorizontal";

const FeaturedMusic = () => {
  const data = [
    {
      img: "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Beatles-GettyImages-1183628511-1000x600.jpg",
      date: "JULY 18TH, 2022",
      title: "The History of the Beatles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: "https://polishhistory.pl/wp-content/uploads/2020/02/Chopin_concert.jpg",
      date: "JULY 4TH, 2022",
      title:
        "What makes modern music and classical music so different yet so good at the same time?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      img: "https://media.newyorker.com/photos/590972afebe912338a37747e/master/pass/Abramovich-Velvet-Underground-1969.jpg",
      date: "JUNE 21ST, 2022",
      title: "A Review of The Velvet Underground & Nico",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];

  return (
    <div className="mt-48 px-[20%]">
      <FeaturedHeader text="Music" />
      <FeaturedHorizontal data={data[0]} />
      <FeaturedHorizontal data={data[1]} />
      <FeaturedHorizontal data={data[2]} />
    </div>
  );
};

export default FeaturedMusic;