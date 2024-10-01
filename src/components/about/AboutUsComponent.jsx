import { TeamSkeleton } from "@/components";
import { useEffect, useState } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const AboutUsComponent = () => {
  const { getTeamMembers } = useServerSideQueries();
  const [loading, setLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);

  function generateTeamSkeleton() {
    const products = [];
    for (let i = 0; i < 12; i++) {
      products.push(<TeamSkeleton key={i} />);
    }
    return products;
  }

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setLoading(true);
      const { success, message, data } = await getTeamMembers();

      if (!success) {
        setLoading(false);
        console.log(message);
        return;
      }

      setTeamMembers(data);
      console.log(message);
      setLoading(false);
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="dark:bg-darkGray dark:text-white">
      {/* About Us section Image */}
      <div className="w-full h-[400px] md:h-[548px] relative">
        <img
          src="https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1723882097599-landing page.png"
          className="object-cover h-full w-full"
          alt="About us banner"
        />

        {/* Banner Content */}
        <div className="absolute top-0 left-0 w-full h-[400px] md:h-[548px] bg-black bg-opacity-20 flex flex-col items-center justify-center">
          <h1 className="text-[50px] md:text-[60px] font-[800] tracking-tighter leading-none text-slate-100 text-center mb-5">
            Our Vision
          </h1>

          <p className="text-base md:text-lg text-white text-center font-light leading-tight">
            We strive to make Kenyan theatre accessible,{" "}
            <br className="hidden md:block" /> fostering a vibrant culture of
            performing arts.
          </p>
        </div>
      </div>

      {/* Meet Our team section */}
      <div className="container py-10 max-w-[700px]">
        <h1 className="text-[50px] md:text-[60px] font-[800] tracking-tighter leading-none text-dark text-center mb-5">
          Meet our Team
        </h1>

        <div className="text-gray">
          Our dedicated team of experienced professionals is at the heart of
          what we do. With a deep knowledge of the local market and a passion
          for the growth of theatre in kenya
        </div>
      </div>

      {/* The Team Area */}
      <div className="container mt-5 pb-20">
        {!loading && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {" "}
            {/* Ensure flex container's width fits the content */}
            {teamMembers.map((team, index) => (
              <div
                key={index}
                className="w-full bg-gray-300 dark:bg-gray rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src={team?.image}
                    alt={team.first_name + " " + team.last_name}
                    className="object-cover w-full rounded-lg"
                  />

                  {/* Image overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg"></div>
                </div>

                {/* team Details */}
                <div className="px-5 pb-3">
                  <h5 className="text-lg font-bold text-gray-800 dark:text-gray-100 mt-3 text-primary dark:text-primary tracking-tighter">
                    {team.first_name + " " + team.last_name}
                  </h5>
                  <p className="text-sm text-gray dark:text-gray-300 dark:text-slate-100">
                    {team.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {generateTeamSkeleton()}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUsComponent;
