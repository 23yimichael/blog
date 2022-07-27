import FeaturedVertical from "../components/FeaturedVertical";
import Layout from "../components/Layout";

const Music = () => {
  const data = [
    {
      id: 0,
      img: "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Beatles-GettyImages-1183628511-1000x600.jpg",
      date: "JULY 18TH, 2022",
      title: "The History of the Beatles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 1,
      img: "https://polishhistory.pl/wp-content/uploads/2020/02/Chopin_concert.jpg",
      date: "JULY 4TH, 2022",
      title:
        "What makes modern music and classical music so different yet so good at the same time?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 2,
      img: "https://media.newyorker.com/photos/590972afebe912338a37747e/master/pass/Abramovich-Velvet-Underground-1969.jpg",
      date: "JUNE 21ST, 2022",
      title: "A Review of The Velvet Underground & Nico",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 3,
      img: "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Beatles-GettyImages-1183628511-1000x600.jpg",
      date: "JULY 18TH, 2022",
      title: "The History of the Beatles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 4,
      img: "https://polishhistory.pl/wp-content/uploads/2020/02/Chopin_concert.jpg",
      date: "JULY 4TH, 2022",
      title:
        "What makes modern music and classical music so different yet so good at the same time?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 5,
      img: "https://media.newyorker.com/photos/590972afebe912338a37747e/master/pass/Abramovich-Velvet-Underground-1969.jpg",
      date: "JUNE 21ST, 2022",
      title: "A Review of The Velvet Underground & Nico",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 6,
      img: "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Beatles-GettyImages-1183628511-1000x600.jpg",
      date: "JULY 18TH, 2022",
      title: "The History of the Beatles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 7,
      img: "https://polishhistory.pl/wp-content/uploads/2020/02/Chopin_concert.jpg",
      date: "JULY 4TH, 2022",
      title:
        "What makes modern music and classical music so different yet so good at the same time?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 8,
      img: "https://media.newyorker.com/photos/590972afebe912338a37747e/master/pass/Abramovich-Velvet-Underground-1969.jpg",
      date: "JUNE 21ST, 2022",
      title: "A Review of The Velvet Underground & Nico",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 9,
      img: "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Beatles-GettyImages-1183628511-1000x600.jpg",
      date: "JULY 18TH, 2022",
      title: "The History of the Beatles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 10,
      img: "https://polishhistory.pl/wp-content/uploads/2020/02/Chopin_concert.jpg",
      date: "JULY 4TH, 2022",
      title:
        "What makes modern music and classical music so different yet so good at the same time?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 11,
      img: "https://media.newyorker.com/photos/590972afebe912338a37747e/master/pass/Abramovich-Velvet-Underground-1969.jpg",
      date: "JUNE 21ST, 2022",
      title: "A Review of The Velvet Underground & Nico",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 12,
      img: "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Beatles-GettyImages-1183628511-1000x600.jpg",
      date: "JULY 18TH, 2022",
      title: "The History of the Beatles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 13,
      img: "https://polishhistory.pl/wp-content/uploads/2020/02/Chopin_concert.jpg",
      date: "JULY 4TH, 2022",
      title:
        "What makes modern music and classical music so different yet so good at the same time?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 14,
      img: "https://media.newyorker.com/photos/590972afebe912338a37747e/master/pass/Abramovich-Velvet-Underground-1969.jpg",
      date: "JUNE 21ST, 2022",
      title: "A Review of The Velvet Underground & Nico",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
  ];

  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <div className="text-center font-poppins font-semibold 2xl:text-5xl xl:text-3xl lg:text-xl mt-12">
            Music
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4">
            {data.map((v) => (
              <FeaturedVertical key={data.id} data={v} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Music;
