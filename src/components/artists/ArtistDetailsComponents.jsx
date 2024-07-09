import ProfileAvatar from "@/assets/profile-avatar.svg";
import { useEffect, useState } from "react";

const ArtistDetailsComponents = () => {
  const [loading, setLoading] = useState(true);

  function generateSimilarArtistSkeleton() {
    const events = [];
    for (let i = 0; i < 6; i++) {
      events.push(<SimilarArtistsSkeleton key={i} />);
    }
    return events;
  }

  function generateUpcomingEventSkeleton() {
    const events = [];
    for (let i = 0; i < 3; i++) {
      events.push(<UpcomingEventSkeleton key={i} />);
    }
    return events;
  }

  const generatePastEvents = () => {
    const events = [];
    for (let i = 0; i < 3; i++) {
      events.push(<UpcomingEventSkeleton key={i} />);
    }

    return events;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container my-10">
      {/* Page Description */}
      <div className="w-full border-b pb-10 border-gray/50 mb-10">
        <h5 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-primary dark:text-gray mb-3">
          Discover Kenya’s Theatre Talent
        </h5>
        <p className="text-md w-1/2 text-gray-600 dark:text-gray-300 text-primary dark:text-slate-100 leading-tight">
          Meet the actors, directors, playwrights, and creatives who bring
          stories to life on stage. Connect with your favorite artists and
          follow their journey in the dynamic Kenyan theatre scene.
        </p>
      </div>

      {/* Artist profile image */}
      <div className="flex mb-10">
        {/* User Profile Details */}
        <div className="w-full">
          <div className="flex items-center gap-5">
            <div className="w-[180px] h-[180px] bg-gray-300 dark:bg-darkGray rounded-lg shadow-md">
              <img
                src={"/images/profile-1.jpg"}
                alt="Artist Profile"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            <div className="">
              <h2 className="text-2xl font-sans font-bold text-gray-800 mb-2 dark:text-gray-100 text-primary tracking-tighter dark:text-gray">
                Artist Name
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-gray leading-tight uppercase">
                scriptwriter, Thespian
              </p>
            </div>
          </div>

          {/* Artist Description */}
          <div className="mt-5 pr-5">
            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              About Jane
            </h5>
            <p className="text-gray-600 dark:text-gray-300 leading-tight mb-5">
              Jane is a renowned thespian based in Nairobi, Kenya. With a
              background in theatre arts from the University of Nairobi, Jane
              has spent over a decade honing her craft and captivating audiences
              with her unique style. Her work spans a variety of mediums,
              including painting, sculpture, and digital art, often blending
              traditional techniques with contemporary themes.
            </p>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Artistic Journey
            </h5>
            <p className="text-gray-600 dark:text-gray-300 leading-tight mb-5">
              Jane's journey as an artist began at a young age, inspired by the
              vibrant culture and natural beauty of her homeland. Her early
              works reflected the landscapes and daily life of Kenya, capturing
              the essence of her surroundings with vivid colors and intricate
              details. Over the years, Jane has evolved her style, experimenting
              with abstract forms and bold expressions that challenge
              conventional perspectives.
            </p>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Notable Works and Exhibitions
            </h5>
            <p className="text-gray-600 dark:text-gray-300 leading-tight mb-5">
              Jane's portfolio boasts a wide array of notable works, including
              the acclaimed series "Urban Rhythms," which explores the dynamic
              energy of city life, and "Echoes of Heritage," a collection that
              delves into the rich history and traditions of Kenyan communities.
              Her pieces have been featured in prestigious galleries and
              exhibitions both locally and internationally, such as the Nairobi
              National Museum, the African Contemporary Art Fair in London, and
              the New York Art Expo.
            </p>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Awards and Recognition
            </h5>
            <p className="text-gray-600 dark:text-gray-300 leading-tight mb-5">
              Jane has received numerous accolades for her contributions to the
              art world. She was honored with the Young African Artist Award in
              2015 and the Global Art Innovation Prize in 2018. Her work
              continues to be celebrated for its originality, depth, and ability
              to connect with a diverse audience.
            </p>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Artistic Philosophy
            </h5>
            <p className="text-gray-600 dark:text-gray-300 leading-tight mb-5">
              At the heart of Jane's art is a desire to tell stories that
              resonate with people from all walks of life. She believes that art
              is a powerful tool for communication and change, capable of
              inspiring reflection and fostering a deeper understanding of our
              shared human experience. Through her art, Jane seeks to bridge
              cultural divides and encourage a dialogue that transcends borders.
            </p>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Get in Touch
            </h5>
            <p className="text-gray-600 dark:text-gray-300 leading-tight mb-5">
              For inquiries about commissions, upcoming exhibitions, or
              collaborations, please contact Jane Doe via email at
              janedoeart@example.com. Follow her on social media to stay updated
              on her latest projects and creative endeavors:
            </p>
            <ul>
              <li>Instagram: @janedoeart</li>
              <li>Twitter: @janedoeart</li>
              <li>Facebook: Jane Doe Art</li>
            </ul>
          </div>
        </div>

        {/* Events Section */}
        <div className="w-[50%] flex flex-col gap-5">
          <div className="bg-slate-100 dark:bg-gray/50 p-5 rounded shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-primary mb-3">
              Upcoming Events
            </h4>

            <div className="flex flex-col gap-5">
              {!loading &&
                [1, 2, 3].map((event) => (
                  <div
                    key={event}
                    className="flex items-center justify-between hover:bg-white dark:bg-gray rounded-lg p-3 hover:shadow-md cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-[150px] bg-gray-300 dark:bg-darkGray rounded-lg">
                        <img
                          className="object-cover w-full h-full rounded-lg"
                          src={`/images/Event-${event}.png`}
                          alt="Event"
                        />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-800 dark:text-primary">
                          Event Title
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Date: 12th December 2021
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Nairobi Cinema Hall, Nairobi
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

              {/* Skeleton */}
              {loading && generateUpcomingEventSkeleton()}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-gray/50 dark:border dark:border-gray/30 p-5 rounded shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-primary mb-3">
              Past Events
            </h4>

            <div className="flex flex-col gap-5">
              {!loading &&
                [1, 2, 3].map((event) => (
                  <div
                    key={event}
                    className="flex items-center justify-between dark:bg-gray hover:bg-white rounded-lg p-3 hover:shadow-md cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-[150px] bg-gray-300 dark:bg-darkGray rounded-lg">
                        <img
                          className="object-cover w-full h-full rounded-lg"
                          src={`/images/Event-${event}.png`}
                          alt="Event"
                        />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-800 dark:text-primary">
                          Event Title
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Date: 12th December 2021
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Nairobi Cinema Hall, Nairobi
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

              {/* Skeleton */}
              {loading && generateUpcomingEventSkeleton()}
            </div>
          </div>
        </div>
      </div>

      {/* Similar Artists */}
      <div className="w-full mb-20">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-primary mb-3">
          Similar Artists
        </h4>

        <div className="overflow-x-auto">
          {" "}
          {/* Enable horizontal scroll */}
          {!loading && (
            <div className="flex gap-5 whitespace-nowrap">
              {" "}
              {/* Ensure flex container's width fits the content */}
              {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((artist) => (
                <div
                  key={artist}
                  className="min-w-56 md:w-80 bg-gray-300 dark:bg-darkGray rounded-lg"
                >
                  <img
                    src={`/images/profile-${artist}.jpg`}
                    alt="Artist Profile"
                    className="object-cover min-w-56 md:w-80 rounded-lg"
                  />
                  <h5 className="text-lg font-bold text-gray-800 dark:text-gray-100 mt-3 text-primary tracking-tighter">
                    Artist Name
                  </h5>
                  <p className="text-sm text-gray dark:text-gray-300 dark:text-slate-100">
                    scriptwriter, Thespian
                  </p>
                </div>
              ))}
            </div>
          )}
          {/* Skeleton */}
          {loading && (
            <div className="flex flex-col md:flex-row items-center gap-5">
              {generateSimilarArtistSkeleton()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SimilarArtistsSkeleton = () => {
  return (
    <div className="bg-white dark:bg-darkGray rounded-lg dark:border-[1px] dark:border-darkGray">
      <div className="min-w-56 md:w-56 bg-gray-300 rounded-lg transition ease-in-out delay-150 animate-pulse">
        <div className="h-[150px] bg-gray flex justify-center items-center rounded-t-lg mb-3">
          <img
            src={"/images/kitft-logo-dark.png"}
            alt={"Skeleton Image"}
            className="w-[120px] object-cover rounded-t-lg mb-3"
          />
        </div>

        <div className="px-5 pb-3">
          <h3 className="bg-gray w-full h-3 rounded-full mb-2"></h3>
          <p className="bg-gray h-3 w-[100px] rounded-full mb-2"></p>
        </div>
      </div>
    </div>
  );
};

const UpcomingEventSkeleton = () => {
  return (
    <div className="flex items-center justify-between rounded-lg p-3 hover:shadow-md cursor-pointer transition ease-in-out delay-150 animate-pulse">
      <div className="flex items-center gap-5">
        <div className="w-[180px] h-[130px] bg-gray dark:bg-darkGray rounded-lg p-3 flex justify-center items-center">
          <img
            className="object-cover w-[120px] rounded-lg"
            src={"/images/kitft-logo-dark.png"}
            alt="Event"
          />
        </div>
        <div>
          <h3 className="bg-gray w-[100px] h-3 rounded-full mb-2"></h3>
          <p className="bg-gray h-3 w-[150px] rounded-full mb-2"></p>
          <p className="bg-gray h-3 w-[150px] rounded-full mb-2"></p>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetailsComponents;
