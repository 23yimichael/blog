import FeaturedHeader from "./FeaturedHeader";
import FeaturedVertical from "./FeaturedVertical";

const FeaturedFilmTV = () => {
  const data = [
    {
      img: "https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7362-/RL3kyOI3ZuozlDYPqYL9pqxsvaOR2y_original.jpg",
      date: "JULY 18TH, 2022",
      title: "Memories of Murder Review",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      img: "https://www.indiewire.com/wp-content/uploads/2019/06/574055-frank_ockenfels-amc.jpg",
      date: "JULY 4TH, 2022",
      title: "Breaking Bad's Cinematography",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      img: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3OTIzNTgwNjgyMjQ5ODc0/11-things-you-didnt-know-about-82162001-a-space-odyssey8217s-featured-photo.jpg",
      date: "JUNE 12TH, 2022",
      title: "2001: A Space Odyssey and the Evolution of Man",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/526144-there-will-be-blood-paramount-c0cfe0ed18576681993146ac4d5062c0.jpg",
      date: "JUNE 2ND, 2022",
      title: "There Will Be Blood's Study of Human Greed",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-48">
      <div className="2xl:w-[1550px] xl:w-[1000px] lg:w-[800px]">
        <FeaturedHeader text="Film/TV" />
        <div className="flex mt-24 2xl:space-x-4 xl:space-x-6 lg:space-x-4">
          <FeaturedVertical data={data[0]} />
          <FeaturedVertical data={data[1]} />
          <FeaturedVertical data={data[2]} />
          <FeaturedVertical data={data[3]} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedFilmTV;
