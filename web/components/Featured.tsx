import Divider from "@mui/material/Divider";
import FeaturedBig from "./FeaturedBig";
import FeaturedSmall from "./FeaturedSmall";

const Featured = () => {
  const data = [
    {
      img: "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Beatles-GettyImages-1183628511-1000x600.jpg",
      genre: "MUSIC",
      title: "The History of the Beatles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: "https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7362-/RL3kyOI3ZuozlDYPqYL9pqxsvaOR2y_original.jpg",
      genre: "FILM/TV",
      title: "Memories of Murder Review",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      img: "https://www.indiewire.com/wp-content/uploads/2019/06/574055-frank_ockenfels-amc.jpg",
      genre: "FILM/TV",
      title: "Breaking Bad's Cinematography",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
  ];

  return (
    <div className="flex items-center justify-center 2xl:space-x-16 lg:space-x-12 xl:space-x-14 2xl:mt-32 lg:mt-8 xl:mt-12">
      <FeaturedBig data={data[0]} />
      <Divider orientation="vertical" variant="middle" flexItem />
      <div>
        <FeaturedSmall data={data[1]} />
        <FeaturedSmall margin data={data[2]} />
      </div>
    </div>
  );
};

export default Featured;
