import { useNavigate } from "react-router-dom";
import { UniversalOutlineButton, SearchComponent } from "../../components";
import useAuthStore from "../../store/UseAuthStore";
import LandingImage from "../../assets/landing.png";

const HeroComponent = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  return (
    <section className="h-[650px] relative dark:border-b dark:border-slate-200 mb-10 md:mb-20">
      <img
        src={LandingImage}
        alt="Landing page image"
        className="w-full h-full object-cover"
      />

      {/* Image overlay */}
      <div className="absolute top-0 left-0 w-full h-[650px] bg-black bg-opacity-55">
        <div className="flex flex-col items-center justify-center h-full ">
          <h1 className="text-[50px] md:text-[60px] font-[800] tracking-tighter leading-none text-slate-100 text-center mb-5">
            Experience the Magic <br /> of Kenyan Theatre
          </h1>
          <p className="text-base md:text-lg text-white text-center font-light leading-tight">
            Immerse yourself in the vibrant world of Kenyan theatre and{" "}
            <br className="hidden md:block" />
            discover the rich cultural heritage of our nation through{" "}
            <br className="hidden md:block" />
            captivating performances, thought-provoking stories, and{" "}
            <br className="hidden md:block" />
            unforgettable experiences.
          </p>
          <div className="flex gap-5 mt-5">
            <UniversalOutlineButton
              handleClick={() => {
                user ? navigate("/events") : navigate("/auth-login");
              }}
              title="Get started"
            />
          </div>
        </div>
      </div>

      {/* Search and location filter */}
      <SearchComponent
        classes={"absolute -bottom-8 left-0 w-full hidden md:block"}
        title={"Search events, artists, and more"}
      />
    </section>
  );
};

export default HeroComponent;
