import { useNavigate } from "react-router-dom";
import {
  SearchComponent,
  ReusableSearchModal,
  UniversalOutlineButton,
} from "@/components";
import useAuthStore from "@/store/UseAuthStore";
import LandingImage from "@/assets/landing.png";
import { useState } from "react";

const HeroComponent = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [showSearchModal, setShowSearchModal] = useState(false);

  const toggleShowSearchModal = () => setShowSearchModal((prev) => !prev);

  const handleGetStartedClick = () => {
    navigate("/events");
  };

  const renderHeading = () => (
    <h1 className="text-[50px] md:text-[60px] font-[800] tracking-tighter leading-none text-slate-100 text-center mb-5">
      Experience the Magic <br /> of Theatre
    </h1>
  );

  const renderParagraph = () => (
    <p className="text-base md:text-lg text-white text-center font-light leading-tight">
      Get ready to immerse yourself in a theatrical experience from Kenyan
      theatre and <br className="hidden md:block" />
      16 other countries from around the world.{" "}
      <br className="hidden md:block" />
      An experience rich in cultural heritage presented through captivating
      performances, <br className="hidden md:block" />
      entertaining stories and unforgettable moments.
    </p>
  );

  // https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1724244365112-landing.png
  return (
    <section className="h-[650px] relative dark:border-b dark:border-slate-200 mb-10 md:mb-20">
      <img
        src="https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1725175733318-kenya-national-theatre.jpg"
        alt="Landing page"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-[650px] bg-black bg-opacity-55 flex flex-col items-center justify-center">
        {renderHeading()}
        {renderParagraph()}
        <div className="flex gap-5 mt-5">
          <UniversalOutlineButton
            handleClick={handleGetStartedClick}
            title="GET YOUR TICKET"
            classes={"dark:text-dark dark:hover:text-slate-100"}
          />
        </div>
      </div>

      <SearchComponent
        classes="absolute -bottom-8 left-0 w-full hidden md:block"
        title="Search events, artists, and more"
        handleClick={toggleShowSearchModal}
      />

      <ReusableSearchModal
        show={showSearchModal}
        onClose={toggleShowSearchModal}
      />
    </section>
  );
};

export default HeroComponent;
