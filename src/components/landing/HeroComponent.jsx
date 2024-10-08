import { useState, useEffect } from "react";
import "flickity/css/flickity.css";
import Flickity from "react-flickity-component";
import {
  SearchComponent,
  SecondaryButton,
  ReusableSearchModal,
} from "@/components";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { useNavigate } from "react-router-dom";

const HeroComponent = () => {
  const { getAdvertisementBanners } = useServerSideQueries();
  const [advertData, setAdvertData] = useState([]);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const navigate = useNavigate();

  const handleNavigateToEventDetail = (id) => {
    if (id) {
      navigate(`/events/${id}`);
    }
  };

  // Fetch advertisement banners
  useEffect(() => {
    const fetchAdvertisementBanners = async () => {
      const { success, message, data } = await getAdvertisementBanners();

      if (!success) {
        console.log(message);
        return;
      }

      setAdvertData(data || []);
    };

    fetchAdvertisementBanners();
  }, []);

  // Array of fallback banner images
  const fallbackImages = [
    {
      _id: null,
      advertisement_banner:
        "https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1725545242867-2024 FESTIVAL ACTS (2) (1).jpg",
    },
    {
      _id: null,
      advertisement_banner:
        "https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1725959679012-FESTIVAL ACTS  (10).jpg",
    },
    {
      _id: null,
      advertisement_banner:
        "https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1725959907133-FESTIVAL ACTS  (11).jpg",
    },
    {
      _id: null,
      advertisement_banner:
        "https://s3.fr-par.scw.cloud/files.kitfest.co.ke/1725959227100-FESTIVAL ACTS  (9).jpg",
    },
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

  // Use advertData if available, otherwise fallback to fallbackImages
  const imagesToDisplay = advertData?.length > 1 ? advertData : fallbackImages;

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
        {advertData?.map((image, index) => (
          <div
            key={index}
            onClick={() => handleNavigateToEventDetail(image._id)}
            className="relative w-full md:w-[80%] mx-auto h-auto md:h-[650px] md:px-3 md:py-5"
          >
            {/* Image */}
            <img
              src={image.advertisement_banner}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover object-center rounded-lg"
              onError={(e) => {
                // Fallback to background color or default image if loading fails
                e.target.src = "/path/to/fallback-image.jpg"; // specify a local fallback image here
              }}
            />
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
