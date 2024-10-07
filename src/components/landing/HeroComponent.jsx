import { useState } from "react";
import "flickity/css/flickity.css";
import Flickity from "react-flickity-component";
import {
  SearchComponent,
  SecondaryButton,
  ReusableSearchModal,
} from "@/components";

const HeroComponent = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  // Array of banner images
  const images = [
    "https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1725545242867-2024 FESTIVAL ACTS (2) (1).jpg",
    "https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1725959679012-FESTIVAL ACTS  (10).jpg",
    "https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1725959907133-FESTIVAL ACTS  (11).jpg",
    "https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1725959227100-FESTIVAL ACTS  (9).jpg",
    "https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1725956856783-FESTIVAL ACTS  (4).jpg",
    "https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1725971096391-KITFEST-2024-SHOWS-2.jpg",
  ];

  // Flickity carousel options
  const flickityOptions = {
    wrapAround: true,
    autoPlay: true,
    pauseAutoPlayOnHover: true,
    pageDots: false,
    contain: true,
  };

  const toggleShowSearchModal = () => setShowSearchModal((prev) => !prev);

  return (
    <section className="h-auto md:h-[650px] relative dark:border-b dark:border-gray/10 mb-10 md:mb-20 bg-primary/80 dark:bg-darkGray">
      {/* Flickity Carousel */}
      <Flickity
        options={flickityOptions}
        elementType={"div"}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => alert("msg")}
            className="relative w-full md:w-[80%] mx-auto h-auto md:h-[650px] md:px-3 md:py-5"
          >
            {/* Image */}
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover object-center rounded-lg"
            />

            {/* Book Ticket Button */}
            {/* <div className="absolute bottom-0 w-[98%] mx-auto mb-5 left-1/2 transform -translate-x-1/2 text-center bg-black/60 rounded-b py-5 px-10">
              <h1 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-none">
                The Dying Need for Shoes
              </h1>
              <p className="text-xs text-white md:text-xl font-normal">
                Now showing
              </p>
              <p className="text-sm text-white md:text-xl font-normal mb-5">
                at the KITFEST 2024
              </p>

              <SecondaryButton
                title="Book tickets"
                icon={<i className="fas fa-ticket-alt"></i>}
                handleClick={toggleShowSearchModal}
              />
            </div> */}
          </div>
        ))}
      </Flickity>

      {/* Search Component */}
      <SearchComponent
        classes="absolute -bottom-8 left-0 w-full hidden md:block"
        title="Search events, artists, and more"
        handleClick={toggleShowSearchModal}
      />

      {/* Search Modal */}
      <ReusableSearchModal
        show={showSearchModal}
        onClose={toggleShowSearchModal}
      />
    </section>
  );
};

export default HeroComponent;
