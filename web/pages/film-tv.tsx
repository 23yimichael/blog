import FeaturedVertical from "../components/FeaturedVertical";
import Layout from "../components/Layout";

const Music = () => {
  const data = [
    {
      id: 0,
      img: "https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7362-/RL3kyOI3ZuozlDYPqYL9pqxsvaOR2y_original.jpg",
      date: "JULY 18TH, 2022",
      title: "Memories of Murder Review",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 1,
      img: "https://www.indiewire.com/wp-content/uploads/2019/06/574055-frank_ockenfels-amc.jpg",
      date: "JULY 4TH, 2022",
      title: "Breaking Bad's Cinematography",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 2,
      img: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3OTIzNTgwNjgyMjQ5ODc0/11-things-you-didnt-know-about-82162001-a-space-odyssey8217s-featured-photo.jpg",
      date: "JUNE 12TH, 2022",
      title: "2001: A Space Odyssey and the Evolution of Man",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 3,
      img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/526144-there-will-be-blood-paramount-c0cfe0ed18576681993146ac4d5062c0.jpg",
      date: "JUNE 2ND, 2022",
      title: "There Will Be Blood's Study of Human Greed",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 4,
      img: "https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7362-/RL3kyOI3ZuozlDYPqYL9pqxsvaOR2y_original.jpg",
      date: "JULY 18TH, 2022",
      title: "Memories of Murder Review",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 5,
      img: "https://www.indiewire.com/wp-content/uploads/2019/06/574055-frank_ockenfels-amc.jpg",
      date: "JULY 4TH, 2022",
      title: "Breaking Bad's Cinematography",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 6,
      img: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3OTIzNTgwNjgyMjQ5ODc0/11-things-you-didnt-know-about-82162001-a-space-odyssey8217s-featured-photo.jpg",
      date: "JUNE 12TH, 2022",
      title: "2001: A Space Odyssey and the Evolution of Man",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 7,
      img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/526144-there-will-be-blood-paramount-c0cfe0ed18576681993146ac4d5062c0.jpg",
      date: "JUNE 2ND, 2022",
      title: "There Will Be Blood's Study of Human Greed",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 8,
      img: "https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7362-/RL3kyOI3ZuozlDYPqYL9pqxsvaOR2y_original.jpg",
      date: "JULY 18TH, 2022",
      title: "Memories of Murder Review",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 9,
      img: "https://www.indiewire.com/wp-content/uploads/2019/06/574055-frank_ockenfels-amc.jpg",
      date: "JULY 4TH, 2022",
      title: "Breaking Bad's Cinematography",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 10,
      img: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3OTIzNTgwNjgyMjQ5ODc0/11-things-you-didnt-know-about-82162001-a-space-odyssey8217s-featured-photo.jpg",
      date: "JUNE 12TH, 2022",
      title: "2001: A Space Odyssey and the Evolution of Man",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 11,
      img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/526144-there-will-be-blood-paramount-c0cfe0ed18576681993146ac4d5062c0.jpg",
      date: "JUNE 2ND, 2022",
      title: "There Will Be Blood's Study of Human Greed",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
  ];

  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <div className="text-center font-poppins font-semibold 2xl:text-5xl xl:text-3xl lg:text-xl mt-12">
            Film/TV
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4">
            {data.map((v) => (
              <FeaturedVertical key={v.id} data={v} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Music;
