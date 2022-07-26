import Layout from "../../components/Layout";

const View = () => {
  const data = {
    img: "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Beatles-GettyImages-1183628511-1000x600.jpg",
    genre: "MUSIC",
    date: "JULY 18TH, 2022",
    title: "The History of the Beatles",
    text: "In the week leading up to this album I spent a bunch of time listening to For the First Time. I was excited for this release a lot, and in the immediate time leading up to it, For the First Time became an instant classic to me. I then spent a lot of time listening to other windmill bands like black midi, Squid, Yard Act, etc. black midi and Squid in particular are just astounding bands. The Windmill Scene I concluded is just about the best thing in modern music. It incorporates just about everything I look for. Neat genre fusions, thought provoking and unique lyricism, and, above all, just an incredible style. I’ll be listening to BCNR, BM, or Squid and really it just doesn’t sound like any music I could find anywhere else. Schlagenheim was leading the way, and already managed to reach a peak of my 2nd favorite album leading up to this release. How does this scene get any better than that?<br/><br/><i>Ants from Up There is an artistic masterpiece.</i><br/><br/>This thing is first and foremost one of the most engaging works of music I have ever listened to lyrically. This thing explores themes about longing, nostalgia, and perseverance in what’s just some of the most well written pieces I’ve ever heard. Tracks like “Concorde” and “The Place Where He Inserted the Blade” are straight up emotional guy punches. The latter of those songs may honestly be the very best experience I’ve ever had listening to a song. Every single time it comes on it’s something special. It’s backed by some incredibly passionate vocals which leaves me incredibly disappointed to hear of Isaac’s leaving, but thankful for that we ever even got this in the first place. The instrumentals on here are just as incredible as the writing and vocals. Probably the biggest example is on a track like “Basketball Shoes” with an incredibly grand jazz influenced post-rock finale. Instrumentally, this album draws influences from all over the place. Chamber music, art pop, prog rock, punk, post-rock, folk, jazz, etc. With all of these tracks feeling so distinct, that just makes it more amazing that this sounds as cohesive as it does. This is truly a incredible job when it comes from flowing track to track on very strong sonic transitions.<br/><br/>So how did I feel when this came out? Well by the description I just gave, obviously it was overwhelmingly positive. This was the very best experience I have ever had listening to an album for the first time (pun intended). Instantly in my top 5. Listens 2 and 3 dropped it a bit, but listen 4 bright it up into my top 3 again and by listen 5 I had no choice but to say this is the best thing I have ever heard. 5 listens in a row is pretty unprecedented for me. The most I have ever done in a row before this is 3, on an album less than half as long. I didn’t stop at 5 though. I listened to this thing 10 times over. No album has ever brought such a strong reaction out of me.<br/><br/>I have no choice but to say, this is the best thing mankind has ever created up to this point.",
  };

  return (
    <Layout>
      <div className="flex justify-center mt-12">
        <div className="w-[800px]">
          <div className="flex">
            <div className="font-poppins font-semibold text-base text-gray">
              {data.genre}
            </div>
            <div className="font-poppins font-semibold text-base text-gray ml-auto">
              {data.date}
            </div>
          </div>

          <div className="font-poppins font-semibold 2xl:text-3xl xl:text-2xl mt-2">
            {data.title}
          </div>
          <img
            src={data.img}
            className="w-[800px] aspect-[5/3] rounded-xl mt-10"
          />
          <div
            className="font-poppins mt-14 whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: data.text }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default View;
